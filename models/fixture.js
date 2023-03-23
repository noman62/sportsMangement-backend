import mongoose from 'mongoose'
const { Schema } = mongoose
const { ObjectId } = Schema

const fixtureSchema = new Schema(
  {
    match: {
      type: String
    },
    date: {
        type: String
      },
    time: {
      type: String
    },
    result: {
      type: String
    },
    win: {
      type: String
    }
  },
  { timestamps: true }
)

export default mongoose.model('Fixure', fixtureSchema)
