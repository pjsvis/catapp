/**
 * Upload an image file to the cat api
 * The api only accepts one file at a time
 * Each image is validated and rejected if not suitable or not a cat
 * TODO: Return success/failure so that we can advise the user
 * @param files
 */
export function uploadFile(files: File[]) {
  const formData = new FormData();

  files.map((file, index) => {
    formData.append(`file${index}`, file);
  });
  console.log('upload: ', files);
  fetch('https://api.thecatapi.com/v1/images/upload', {
    // content-type header should not be specified!
    method: 'POST',
    body: formData,
    headers: {
      'x-api-key': 'a727925c-68b0-4a92-b790-e355b2c28c9c',
    },
  })
    .then((response) => response.json())
    .then((success) => {
      // Do something with the successful response
      console.log(success);
    })
    .catch((error) => console.log(error));
}
