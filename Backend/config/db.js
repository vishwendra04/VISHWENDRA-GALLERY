import mongoose from "mongoose";

const connectToMongo = async () => {
  const res = await mongoose.connect(
    "mongodb://localhost:27017/mern-gallery"
  );
  if (res) {
    console.log("Connected Succesffuly");
  }
};

export default connectToMongo;