import mongoose from "mongoose";
// Connect to your MongoDB Atlas cluster
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Define the Van schema and model
const vanSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  description: String,
  imageUrl: String,
  type: String,
  hostId: String
});

const Van = mongoose.model("Van", vanSchema);

export default Van;