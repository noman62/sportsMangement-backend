import Fixture from '../models/fixture'
const express = require('express')
const app = express()
const mongoose = require('mongoose')
//upload product
export const newFixture = async (req, res) => {
  try {
    const { match, date, time, result, win } = req.body

    // Save user in database
    const setDonation = new Fixture({
      match,
      date,
      time,
      result,
      win
    })
    await setDonation.save().then(newFixture => {
      console.log('New Donation----->', newFixture)
    })

    //Send success response to front-end
    return res.json({ ok: true })
  } catch (err) {
    console.log(err)
    return res.status(400).send('Error. Try again.')
  }
}


// Get all Event
export const specificFixture = async (req, res) => {
  const all = await Fixture.find().exec()
  res.json(all)
}


