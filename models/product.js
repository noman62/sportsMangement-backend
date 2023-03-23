import mongoose from 'mongoose'
const { Schema } = mongoose
const { ObjectId } = Schema

const productSchema = new Schema(
  {
    productName: {
      type: String,
      trim: true,
      required: true,
    },
    productType: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
      
    }
  },
  { timestamps: true }
)

export default mongoose.model('Product', productSchema)