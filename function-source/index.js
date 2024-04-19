'use strict';
const functions = require('@google-cloud/functions-framework');
const {Storage} = require("@google-cloud/storage");
const env = process.env.SUBFIX
const subfix_array = env.split(".");
const storage = new Storage();

functions.cloudEvent('entryPoint',  async cloudEvent => {

  const file = cloudEvent.data;
  console.log(`Bucket: ${file.bucket}`);
  console.log(`File: ${file.name}`);

  if (subfix_array.indexOf(file.name.split('.').pop()) > -1) {
    console.log(`File Subfix: ${file.name.split('.').pop()}`);
    const bucketName = file.bucket;
    const fileName = file.name;
    async function setFileMetadata() {
      // Set file metadata.
      const [metadata] = await storage
          .bucket(bucketName)
          .file(fileName)
          .setMetadata(
              {
                // Predefined metadata for server e.g. 'cacheControl', 'contentDisposition',
                // 'contentEncoding', 'contentLanguage', 'contentType'
                cacheControl: 'no-store',
              }
          );

      console.log(
          'Updated metadata for object',
          fileName,
          'in bucket ',
          bucketName
      );
      console.log(metadata);
    }
    setFileMetadata().catch(console.error);
  } else {
    console.log("Non object metadata need modified.");
  }
});

