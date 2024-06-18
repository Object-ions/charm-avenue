import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

const port = process.env.PORT;

connectDB();

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie-parser middleware
app.use(cookieParser()); // Allow us to to request.cookie.whatever we called the cookie (userController: 20))

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

/*
__dirname is a Node.js variable that represents the directory name of the current module. However, when using ES modules (import/export syntax), __dirname is not available by default.
const __dirname = path.resolve(); sets __dirname to the current working directory of the Node.js process. This is done to maintain consistency and access the root directory of your project.
*/

const __dirname = path.resolve(); // Set __dirname to current directory

/*
When you upload an image or any file to your server, it gets saved in a directory (in this case, the uploads directory). To access these files from the frontend (e.g., displaying uploaded images), you need to serve them.
By making the directory static, you allow the files within it to be directly accessible via a URL.
*/

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  // any route that is not api will be redirect to index.html
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running at ${port}`));
