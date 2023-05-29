import mongoose from 'mongoose'
const { Schema } = mongoose
const { ObjectId } = Schema

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    roll: {
      type: String,
      trim: true,
      required: true,
    },
    session: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    },
    imageURL: {
      type: String,
      required: true,
      
    },
    role: {
      type: String,
      default: 'user',
    }
  },
  { timestamps: true }
)

export default mongoose.model('User', userSchema)
