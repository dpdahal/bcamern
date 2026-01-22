import fs from "fs";
import multer from "multer";

class FileUpload {
  async folderExists(folderPath) {
    let filePath = `./public/${folderPath}`;
    let res = await fs.existsSync(filePath);
    if (!res) {
      await fs.mkdirSync(filePath, { recursive: true });
      res = true;
    }
    return res;
  }

  uploadImageAndFile(filePath) {
    this.folderExists(filePath);
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, `public/${filePath}`);
      },
      filename: function (req, file, cb) {
        let fileName = file.originalname.trim();
        let imageName =
          Date.now() + "-" + Math.round(Math.random() * 1e9) + "-" + fileName;
        cb(null, imageName);
      },
    });

    return multer({ storage: storage });
  }
}

export default FileUpload;
