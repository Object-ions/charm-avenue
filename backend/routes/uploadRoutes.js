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
function fileFilter(req, file, cb) {
  // Allowed file extensions
  const filetypes = /jpe?g|png|webp/;
  const mimetypes = /image\/jpe?g|image\/png|image\/webp/;

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = mimetypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error('Images only!'), false);
  }
}

const upload = multer({ storage, fileFilter });

// 'image' will be the field name
const uploadSingleImage = upload.single('image');

// Handle the post request
router.post('/', (req, res) => {
  uploadSingleImage(req, res, function (err) {
    if (err) {
      return res.status(400).send({ message: err.message });
    }

    res.status(200).send({
      message: 'Image uploaded successfully',
      image: `/${req.file.path}`,
    });
  });
});

export default router;
