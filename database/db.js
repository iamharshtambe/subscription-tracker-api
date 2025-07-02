import mongoose from 'mongoose';
import { DB_URI, NODE_ENV } from '../config/env.js';

export async function connectToDabatase() {
   try {
      await mongoose.connect(DB_URI);
      console.log(`Connected to database in ${NODE_ENV} mode`);
   } catch (error) {
      console.error('Error connecting to database', error);
      process.exit(1);
   }
}
