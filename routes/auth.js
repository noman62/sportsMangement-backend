import express from 'express'
const router = express.Router()



// controllers
import {
  register,
  login,
  logout,
  allUser,
  deleteUser

} from '../controllers/auth'

// Routes
router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)
router.get('/allUser', allUser)
router.delete('/delete/:id', deleteUser)
module.exports = router
