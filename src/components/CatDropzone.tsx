import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { UploadResponse } from '../services/cat-types';
import { uploadFile } from '../services/upload-file';
import Dropzone from 'react-dropzone';
import to from 'await-to-js';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

export function CatDropzone() {
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [response, setResponse] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const queryClient = useQueryClient();

  const handleResponse = (res: unknown) => {
    console.log('Upload Response: ', res);
    setResponse('File uploaded');
    queryClient.invalidateQueries('cats');
  };

  const validateFile = (file: File) => {
    console.log('File', file);
    const mimeType = file.type;
    let isOk = false;
    switch (mimeType) {
      case 'image/png':
        isOk = true;
        break;
      case 'image/jpeg':
        isOk = true;
        break;
      default:
        isOk = false;
        ``;
    }
    if (!isOk) {
      setErrorMsg('You can only upload image/png and image/jpeg file types');
      return false;
    }
    return true;
  };

  const handleUpload = async (files: File[]) => {
    const file = files[0];
    if (!validateFile(file)) {
      return;
    }
    setIsUploading(true);
    setFile(file);
    setErrorMsg('');
    setResponse(null);
    const [err, res] = await to(uploadFile(file));
    setIsUploading(false);
    err ? setErrorMsg(err.message) : noop();
    console.log('Upload error: ', err);
    console.log('Upload Response when error: ', res);
    res && res ? handleResponse(res) : noop();
  };

  const clearError = () => {
    setErrorMsg('');
  };

  return (
    <>
      <Dropzone onDrop={(acceptedFiles) => handleUpload(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <div className="ba b--black-10 bg-washed-blue pa4 pt6 pb6 shadow-4 mt6 pointer">
                <div className="f4 mb2 center fit-w">Upload File</div>
                <div className="blue center fit-w mt2">
                  <i className="fa fa-3x fa-cloud-upload"></i>
                </div>
                <form id="upload">
                  <input {...getInputProps()} />
                  <div className="center fit-w mt2">Drag and drop a file here, or click to select files...</div>
                </form>
                {isUploading ? (
                  <div className="fit-w center">
                    <i className="fa fa-spinner fa-spin fa-lg fa-fw"></i>
                    <span className="">Uploading file {file && file.name}...</span>{' '}
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        )}
      </Dropzone>
      <div>
        {errorMsg ? (
          <div className="ba b--black-10 mt2 bg-washed-red pa4 mt4 shadow-4">
            <div className="f4 mb2">Upload Error</div>
            <div>{errorMsg ? errorMsg : null}</div>
            <div>{response ? <div>{response}</div> : null}</div>
            <button className="mt2" onClick={clearError}>
              Clear
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}
