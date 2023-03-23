import express from 'express'
const router = express.Router()

// controllers
import { adminRequest, allRequest, deleteRequest, newRequest, updateStatus } from '../controllers/getRequest'

// Routes

router.post('/request', newRequest)
router.get('/requests', allRequest)
router.get('/allrequest', adminRequest)
router.put('/updateRequest/:id', updateStatus)
router.delete('/deleteRequest/:id', deleteRequest)


module.exports = router
