import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  lodge: { type: mongoose.Schema.Types.ObjectId, ref: "Lodge" },
  caretaker: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Booking", bookingSchema);
