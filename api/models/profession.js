const mongoose = require("mongoose");

const professionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const Profession = mongoose.model("Profession", professionSchema);

module.exports = Profession;
