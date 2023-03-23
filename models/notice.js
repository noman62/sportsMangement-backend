import mongoose from 'mongoose'
const { Schema } = mongoose
const { ObjectId } = Schema

const noticeSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    eventName: {
      type: String,
      trim: true,
      required: true
    },
    eventType: {
      type: String,
    },
    lastDate: {
      type: String,
      trim: true,
      required: true
    },
    imageURL: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

export default mongoose.model('Notice', noticeSchema)
