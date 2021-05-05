import React from 'react';
// import { useUpload } from '@zach.codes/use-upload/lib/react';

export function CatDropzone() {
  // const [upload, { progress, loading }] = useUpload(({ files }) => {
  //   const formData = new FormData();
  //   // TODO: Validate file size and type
  //   for (let index = 0; index < files.length; ++index) {
  //     const file = files.item(index);
  //     if (file) {
  //       formData.append(file.name, file);
  //     }
  //   }
  // TODO: Resolve authentication error
  // return {
  //   method: 'POST',
  //   url: 'https://api.thecatapi.com/v1/images/upload',
  //   body: files[0],
  //   headers: {
  //     'x-api-key': 'a727925c-68b0-4a92-b790-e355b2c28c9c',
  //   },
  // };

  const upload = (files: FileList) => {
    console.log('Upload file...');
    fetch('https://api.thecatapi.com/v1/images/upload', {
      method: 'POST',
      body: files[0],
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-api-key': 'a727925c-68b0-4a92-b790-e355b2c28c9c',
      },
    })
      .then((response) => {
        // TODO: Test for response.status
        console.log('File successfully uploaded: ', response);
      })
      .catch((err) => {
        console.log('An error occurred: ', err);
      });
  };
  // });

  return (
    <div className="ba b--black-10 shadow-5 mt4 pa-2 center">
      <div>
        {/* {loading ? `${progress}% complete` : null} */}
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files) {
              // upload({ files: e.target.files });
              upload(e.target.files);
            }
          }}
        />
      </div>
    </div>
  );
}
