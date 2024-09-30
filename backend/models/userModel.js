//  create userSchema with name, email, password , cartData and export userModel

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [8,"atleast 8 characters required"],
  },
  cartData: {
    type: Object,
    default: {}
  }
});

const userModel = mongoose.model('user', userSchema);

export default userModel;