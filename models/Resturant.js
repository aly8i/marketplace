import mongoose from "mongoose";
const ResturantSchema = new mongoose.Schema(
  {
    name:{
      required: true,
      type: String,
      maxlength: 60,
    },
    description:{
      required: true,
      type: String,
      maxlength: 60,
    },
    type:{
      required: true,
      type: String,
      maxlength: 60,
    },
    link: {
        required: true,
        type: String,
        maxlength: 60,
    },
    logo: {
      required: true,
      type: String,

    },
    phonenumber: {
      type: String,
      default: null,
      maxlength: 2000,
      unique: true,
    },
    address: {
        type: String,
        required: true,
        default: null,
        maxlength: 3000,
    },
    location: {
        type: {
            lat:{ type: String},
            long:{ type: String},
        },
        default: null,
        maxlength: 3000,
    }
  },
  { timestamps: true }
);

export default mongoose.models.Resturant ||
  mongoose.model("Resturant", ResturantSchema);
