import Notice from '../models/notice'
//add Notice
export const newNotice = async (req, res) => {
  console.log(req.body)
  try {
    const { title, eventName, eventType, lastDate, imageURL } = req.body

    //validation
    if (!title) return res.status(400).send('title is required')

    if (!imageURL) return res.status(400).send('imageURL is required')

    // Save user in database
    const setNotice = new Notice({
      title,
      eventName,
      eventType,
      lastDate,
      imageURL
    })
    await setNotice.save().then(newNotice => {
      console.log('New Notice----->', newNotice)
    })

    //Send success response to front-end
    return res.json({ ok: true })
  } catch (err) {
    console.log('parbi')
    console.log(err)
    return res.status(400).send('Error. Try again.')
  }
}

// Get all Notice
export const allNotice= async (req, res) => {
  const all = await Notice.find().exec()
  res.json(all)
}




//delete notice
export const deleteNotice = async (req, res) => {
  Notice.deleteOne({ _id: req.params.id }).then(result => {
    res.send(result.deletedCount > 0)
    console.log(result.deletedCount)
  })
}
