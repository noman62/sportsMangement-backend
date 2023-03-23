import getRequest from '../models/getRequest'
//User Registration
export const newRequest  = async (req, res) => {
  try {
    const { name, department, session, roll, mobile,email} =
      req.body
      console.log(req.body);

    //validation
    if (!name) return res.status(400).send('Name is required')
  
    if (!department) return res.status(400).send('department name is required')
    if (!session) return res.status(400).send('session is required')
    if (!roll) return res.status(400).send('roll is required')
    if (!mobile) return res.status(400).send('mobile is required')
    if (!email) return res.status(400).send('mobile is required')
 

    // Save user in database
    const setRequest  = new getRequest({
      name,
      department,
      session,
      roll,
      mobile,
      email
  
    })
    await setRequest.save().then(newRequest  => {
      console.log('newRequest ----->', newRequest )
    })

    //Send success response to front-end
    return res.json({ ok: true })
  } catch (err) {
    console.log(err)
    return res.status(400).send('Error. Try again.')
  }
}

export const allRequest = async (req, res) => {
  const userEmail = req.query.email
  const all = await getRequest
    .find({ email: { $regex: userEmail, $options: '$i' } })
    .exec()
  res.json(all)
}

export const adminRequest = async (req, res) => {
  const admin = await getRequest.find().exec()
  res.json(admin)
}

export const updateStatus=async(req,res)=>{
  const id = req.params.id
  
  try {
    const doc = await getRequest.findByIdAndUpdate(
      {
        _id:id,
      },
      {
        status:"success",
      },
      {
        new:true,
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

export const deleteRequest=async(req,res)=>{
  getRequest.deleteOne({ _id:req.params.id })
      .then(result => {
        res.send(result.deletedCount > 0)
        console.log(result.deletedCount);
      })

  
  
}
