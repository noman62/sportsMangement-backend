import Event from '../models/event'
const express = require('express')
const app = express()
const mongoose = require('mongoose')
//upload product
export const newEvent = async (req, res) => {
  try {
    const { eventName, eventDetails, lastDate, gender, gameType } = req.body

    // Save user in database
    const setDonation = new Event({
      eventName,
      eventDetails,
      lastDate,
      gender,
      gameType
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

// Get all Event
export const allEvent = async (req, res) => {
  const all = await Event.find().exec()
  res.json(all)
}

// Get all Event
export const specificEvent = async (req, res) => {
  const all = await Event.find().limit(3).exec()
  res.json(all)
}


export const deleteEvent = async (req, res) => {
  try {
    const id = req.params.id;
    await Event.findByIdAndDelete(id);
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
