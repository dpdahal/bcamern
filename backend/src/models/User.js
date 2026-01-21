import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true,
  },
  gender:{
    type: String,
    enum: ['male', 'female', 'other']
  },
  role:{
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  status:{
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  image:{
    type: String,
  },
    createdAt:{
    type: Date,
    default: Date.now,
    },
    updatedAt:{
    type: Date,
    default: Date.now,
    },

})

export default mongoose.model('User', userSchema);