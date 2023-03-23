import Registration from '../models/registration'
//User Registration
export const newRegistration = async (req, res) => {
  try {
    const { name, father, mother, department, session, roll,eventType, mobile ,email} =
      req.body
      console.log(req.body)

    //validation
    if (!name) return res.status(400).send('Name is required')
    if (!father) return res.status(400).send('father name is required')
    if (!mother) return res.status(400).send('mother name is required')
    if (!department) return res.status(400).send('department name is required')
    if (!session) return res.status(400).send('session is required')
    if (!roll) return res.status(400).send('roll is required')
    if (!eventType) return res.status(400).send('roll is required')
    if (!mobile) return res.status(400).send('mobile is required')
    if (!email) return res.status(400).send('mobile is required')
 

    // Save user in database
    const setRegistration = new Registration({
      name,
      father,
      mother,
      department,
      session,
      roll,
      eventType,
      mobile,
      email
    })
    await setRegistration.save().then(newRegistration => {
      console.log('New Registration----->', newRegistration)
    })

    //Send success response to front-end
    return res.json({ ok: true })
  } catch (err) {
    console.log(err)
    return res.status(400).send('Error. Try again.')
  }
}

// Get all donations
export const allRegistration= async (req, res) => {
  const all = await Registration.find().exec()
  res.json(all)
}

// Get a single Donation
export const read = async (req, res) => {
  const id = req.params.donationId
  console.log(id)
  try {
    const singleDonation = await Registration.findOne({ _id: id }).exec()
    res.json(singleDonation)
    console.log(singleDonation)
  } catch (err) {
    console.log(err)
  }
}

export const specificDonation = async (req, res) => {
  const userEmail = req.query.email
  const all = await Registration.find({
    email: { $regex: userEmail, $options: '$i' }
  }).exec()
  res.json(all)
}
export const searchDonation = async (req, res) => {
  const userDonation = req.query.productName
  const all = await Registration.find({
    productName: { $regex: userDonation, $options: '$i' }
  }).exec()
  res.json(all)
}

export const updateStatus = async (req, res) => {
  const id = req.params.id
  console.log(id)

  try {
    const doc = await Registration.findByIdAndUpdate(
      {
        _id: id
      },
      {
        status: 'success'
      },
      {
        new: true
      }
    )
    await doc.save().then(newdoc => {
      console.log('New Doc----->', newdoc)
    })
    return res.json({ ok: true })
  } catch (err) {
    console.log(err)
  }
}

export const deleteDonation = async (req, res) => {
  Registration.deleteOne({ _id: req.params.id }).then(result => {
    res.send(result.deletedCount > 0)
    console.log(result.deletedCount)
  })
}
