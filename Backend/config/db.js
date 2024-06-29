import mongoose from "mongoose";

const connectToMongo = async () => {
  try {
    const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/mern-gallery";
    const res = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected successfully to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default connectToMongo;
