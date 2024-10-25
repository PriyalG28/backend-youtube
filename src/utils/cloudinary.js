import {v2 as cloudinary} from c="cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath)return null;

        //upload file on cloudinary
        const uploadOnCloudinary = async (localFilePath) => {
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })

        // file has been uploaded
        console.log("File has been uploaded successfully", response.url)
        console.log(response)
        return response
    }
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved temp file as the upload operation failed
        return null;
    }
}

export {uploadOnCloudinary}