import express from 'express'
import { updateStatus } from '../controllers/getRequest'
const router = express.Router()

// controllers
import {
  allRegistration,
  deleteDonation,
  newRegistration,
  read,
  searchDonation,
  specificDonation
} from '../controllers/registration'

// Routes

router.post('/registration', newRegistration)
router.get('/registrations', allRegistration)
router.get('/user-donation', specificDonation)
router.get('/search', searchDonation)
router.get('/donation/:donationId', read)
router.put('/update/:id', updateStatus)
router.delete('/deleteDonation/:id', deleteDonation)

module.exports = router
