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
      {/* <div className="ba b--black-10 shadow-5 mt4 pa4 center"> */}
      {/* <div>
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files) {
                handleUpload(e.target.files[0]);
              }
            }}
          />
        </div> */}
      <div className="ba b--black-10 bg-washed-blue pa2 pointer">
        <Dropzone onDrop={(acceptedFiles) => handleUpload(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <form id="upload">
                  <input {...getInputProps()} />
                  <p>Drag and drop a file here, or click to select files</p>
                </form>
                {isUploading ? (
                  <div>
                    <i className="fa fa-spinner fa-spin fa-lg fa-fw"></i>
                    <span className="">Uploading file {file && file.name}...</span>{' '}
                  </div>
                ) : null}
              </div>
            </section>
          )}
        </Dropzone>
      </div>
      <div>
        {errorMsg ? (
          <div className="2ba b--black-10 mt2 bg-washed-red pa2">
            <div>{errorMsg ? errorMsg : null}</div>
            <div>{response ? <div>{response}</div> : null}</div>
            <button onClick={clearError}>Clear</button>
          </div>
        ) : null}
      </div>
    </>
  );
}
