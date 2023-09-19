import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    console.log(file.originalname);
    const fileName = "";
    cb(null, file.originalname);
  },
});

console.log(storage);

const uploads = multer({ storage: storage });

export default uploads;
