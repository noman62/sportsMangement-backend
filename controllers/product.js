import Product from '../models/product'
const express = require('express');
const app = express();
const mongoose = require('mongoose');
//upload product
export const newProduct = async (req, res) => {
  try {
    const { productName, productType, imageURL } = req.body

    //validation
    if (!productName) return res.status(400).send('productName is required')
    if (!productType)
      return res.status(400).send('productDetails is required')
    if (!imageURL) return res.status(400).send('imageURL is required')


    // Save user in database
    const setDonation = new Product({
      productName,
      productType,
      imageURL
    })
    await setDonation.save().then(newProduct => {
      console.log('New Donation----->', newProduct)
    })

    //Send success response to front-end
    return res.json({ ok: true })
  } catch (err) {
    console.log(err)
    return res.status(400).send('Error. Try again.')
  }
}

// Get all Product
export const allProduct = async (req, res) => {
  const all = await Product.find().exec()
  res.json(all)
}

// Get a single Donation
export const read = async (req, res) => {
  const id = req.params.donationId
  console.log(id)
  try {
    const singleDonation = await Donation.findOne({ _id: id }).exec()
    res.json(singleDonation)
    console.log(singleDonation)
  } catch (err) {
    console.log(err)
  }
}

// export const specificDonation= async (req, res) => {
//   const userEmail = req.query.email
//   const all = await Donation
//     .find({ email: { $regex: userEmail, $options: '$i' } })
//     .exec()
//   res.json(all)
// }
export const searchDonation= async (req, res) => {

  const userDonation = req.params.productType
  const all = await Product.find({ productType: userDonation }).exec()
  res.json(all)
}



export const deleteDonation=async(req,res)=>{
  Product.deleteOne({ _id:req.params.id })
      .then(result => {
        res.send(result.deletedCount > 0)
        console.log(result.deletedCount);
      })

  
  
}
