import mongoose from 'mongoose';
import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function signUp(req, res, next) {
   const session = await mongoose.startSession();
   session.startTransaction();

   try {
      const { name, email, password } = req.body;

      const existingUser = await User.findOne({ email }).lean();

      if (existingUser) {
         const error = new Error('User already exists');
         error.statusCode = 409;
         throw error;
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const [newUser] = await User.create(
         [{ name, email, password: hashedPassword }],
         { session }
      );

      const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
         expiresIn: JWT_EXPIRES_IN,
      });

      await session.commitTransaction();
      session.endSession();

      res.status(201).json({
         success: true,
         message: 'User created successfully',
         data: {
            token,
            user: newUser,
         },
      });
   } catch (error) {
      await session.abortTransaction();
      session.endSession();
      next(error);
   }
}

export async function signIn(req, res, next) {}

export async function signOut(req, res, next) {}
