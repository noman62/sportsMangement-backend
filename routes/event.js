import express from 'express'
import { allEvent, deleteEvent, newEvent, specificEvent} from '../controllers/event'
const router = express.Router()



router.post('/addEvent', newEvent)
router.get('/events', allEvent)
router.get('/allEvent', specificEvent)
router.delete('/deleteEvent/:id', deleteEvent)


module.exports = router
