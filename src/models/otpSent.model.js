const mongoose = require('mongoose');

const otpSentSchema = new mongoose.Schema(
  {
    otp: { type: String, default: null },
    email: { type: String, default: null },
    lastOtpSentTime: { type: Date, default: null },
    method: { type: String, default: null },
    name: { type: String, required: true },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Otp = mongoose.model('Otp', otpSentSchema);

module.exports = Otp;
