import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Build a storage engine for a given subfolder (e.g. 'packages' or 'gallery')
const makeStorage = (subfolder) => {
  const uploadPath = path.join(__dirname, '..', 'uploads', subfolder);

  // Ensure the folder exists
  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
  }

  return multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const base = path
        .basename(file.originalname, ext)
        .replace(/[^a-zA-Z0-9]/g, '-')
        .toLowerCase();
      const unique = `${base}-${Date.now()}-${Math.round(Math.random() * 1e6)}${ext}`;
      cb(null, unique);
    },
  });
};

const imageFileFilter = (req, file, cb) => {
  const allowed = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only jpg, png, and webp images are allowed'), false);
  }
};

const maxFileSize = Number(process.env.MAX_FILE_SIZE) || 5 * 1024 * 1024; // 5MB default

export const uploadPackageImages = multer({
  storage: makeStorage('packages'),
  fileFilter: imageFileFilter,
  limits: { fileSize: maxFileSize },
}).array('images', 10);

export const uploadGalleryImages = multer({
  storage: makeStorage('gallery'),
  fileFilter: imageFileFilter,
  limits: { fileSize: maxFileSize },
}).array('images', 10);