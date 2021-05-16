import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { UploadResponse } from '../services/cat-types';
import { uploadFile } from '../services/upload-file';
import Dropzone from 'react-dropzone';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const validateFile = (file: File) => {
  // TODO: Validate file
  // TODO: Check if original_filename exists
  console.log(file);
};

export function CatDropzone() {
  const [error, setError] = useState<Error | null>(null);
  const [response, setResponse] = useState<AxiosResponse<UploadResponse> | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const queryClient = useQueryClient();

  const handleResponse = (res: AxiosResponse<UploadResponse>) => {
    setResponse(res);
    queryClient.invalidateQueries('cats');
    console.log(res);
  };

  const handleUpload = async (file: File) => {
    validateFile(file);
    setIsUploading(true);
    setError(null);
    setResponse(null);
    const [res, err] = await uploadFile(file);
    setIsUploading(false);
    err ? setError(err) : noop();
    res ? handleResponse(res) : noop();
    // TODO: Invalidate query to update results
  };

  return (
    <>
      <div className="ba b--black-10 shadow-5 mt4 pa-2 center">
        <div>
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files) {
                handleUpload(e.target.files[0]);
              }
            }}
          />
        </div>
        <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag and drop a file here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>

        {isUploading ? (
          <div>
            <i className="fa fa-spinner fa-spin fa-lg fa-fw"></i>
            <span className="sr-only">Loading...</span>{' '}
          </div>
        ) : null}
      </div>
      <div>{error ? error.message : null}</div>
    </>
  );
}
