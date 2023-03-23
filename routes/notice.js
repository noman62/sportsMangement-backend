import express from 'express'
const router = express.Router()


// controllers
import {
 newNotice,
 allNotice,
 deleteNotice
} from '../controllers/notice'

// Routes


router.post('/notice',newNotice)
router.get('/allNotice', allNotice)
router.delete('/deleteNotice/:id', deleteNotice)





module.exports = router