import mongoose from 'mongoose';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  location: string;
  state: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUser>({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true,
});

// Create a compound index for search optimization
userSchema.index({ firstName: 'text', lastName: 'text', location: 'text', state: 'text' });

export default mongoose.models.User || mongoose.model<IUser>('User', userSchema);
