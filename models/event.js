import mongoose from 'mongoose'
const { Schema } = mongoose
const { ObjectId } = Schema

const eventSchema = new Schema(
  {
    eventName: {
      type: String
    },
    eventDetails: {
        type: String
      },
    lastDate: {
      type: String
    },
    gender: {
      type: String
    },
    gameType: {
      type: String
    }
  },
  { timestamps: true }
)

export default mongoose.model('Event', eventSchema)
