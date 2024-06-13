import path from 'path';
import express from 'express';
import multer from 'multer';

const router = express.Router();

// Describe where we want our image to go (which storage)
const storage = multer.diskStorage({
  // Where we want to save this? (request, file, and cb - callback)
  destination(req, file, cb) {
    // null is for an error - pretense to an error
    // the second arg is where the file should go - and this will be in a folder called 'uploads' in the root
    cb(null, 'uploads/');
  },
  // Describe how we want our file name to be formatted: fieldname(image)-timestamp-extension(png/jpg)
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

// Check the file type
const checkFileType = (file, cb) => {
  // Allowed file extensions
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images only');
  }
};

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
});

// 'image' will be the field name
router.post('/', upload.single('image'), (req, res) => {
  res.json({ path: `/${req.file.path}` }); // Send JSON response
});

export default router;
