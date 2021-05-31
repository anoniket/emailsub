const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emailSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      
    },

  },
  { timestamps: true }
);

// timestamps will auto-create date and time of account activity

const Email = mongoose.model("Email", emailSchema);

module.exports = Email;
