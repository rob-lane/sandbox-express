module.exports = class AWSS3Service { 
    region: String;
    accessKeyId: String;
    secretAccessKey: String;

    constructor(region: String, accessKeyid: String, secretAccessKey: String) {
        this.region = region;
        this.accessKeyId = accessKeyid;
        this.secretAccessKey = secretAccessKey;
    }
    async uploadObject(bucketName: String, fileName: String, fileContent: Buffer) {
        const AWS = require('aws-sdk');
        const s3 = new AWS.S3({
            region: this.region,
            accessKeyId: this.accessKeyId,
            secretAccessKey: this.secretAccessKey
        });

        const params = {
            Bucket: bucketName,
            Key: fileName,
            Body: fileContent
        };

        try {
            const data = await s3.upload(params).promise();
            return data;
        } catch (error) {
            throw new Error(`Error uploading file to S3`);
        }
    }
}