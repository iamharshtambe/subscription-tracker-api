import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: [true, 'User Name is required'],
         minLength: 2,
         maxLength: 50,
         trim: true,
      },
      email: {
         type: String,
         required: [true, 'User Email is required'],
         unique: true,
         lowercase: true,
         trim: true,
         match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
      },
      password: {
         type: String,
         required: [true, 'User Password is required'],
         minLength: 6,
      },
   },
   { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
