 import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;

    await mongoose.connect(mongoUrl);

    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectMongoDB;