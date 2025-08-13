// src/app/api/upload.ts
import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';


// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the directory to save the images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Create a unique filename
  },
});

// Initialize multer
const upload = multer({ storage });

// Create a Next.js API route
// const handler = nextConnect<NextApiRequest, NextApiResponse>();

// handler.use(upload.single('image')) // 'image' is the name of the file input
//   .post((req: NextApiRequest, res: NextApiResponse) => {
//     res.status(200).json({ message: 'Image uploaded successfully', file: req.file });
//   });

// export default handler;