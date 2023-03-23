import mongoose from 'mongoose'
const { Schema } = mongoose
const { ObjectId } = Schema

const getRequestSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    department: {
      type: String,
      trim: true,
      required: true
    },
    session: {
      type: String,
      trim: true,
      required: true
    },
    roll: {
      type: String,
      trim: true,
      required: true
    },
    mobile: {
      type: String,
      trim: true,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    status: {
      type: String,
      default: 'Pending'
    }
  },
  { timestamps: true }
)

export default mongoose.model('getRequest', getRequestSchema)
