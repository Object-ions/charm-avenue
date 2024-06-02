import mongoose from 'mongoose';

// It will be sync bc any method that we call on from mongoose it will return a promise
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected:' + conn.connection.host);
  } catch (error) {
    console.log('Error connecting:' + error.message);
    process.exit(1);
  }
};

export default connectDB;
