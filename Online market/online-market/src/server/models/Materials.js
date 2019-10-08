const mongoose = require("mongoose");
const { Schema } = mongoose;

const MaterialsSchema = new Schema({
  material: {
    type: String
  },
  price: {
    type: Number,
    default: 0
  },
  date: {
    type: String,
    default: new Date().toLocaleString()
  }
});

mongoose.model("Materials", MaterialsSchema);
