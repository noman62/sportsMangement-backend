import express from 'express'
import { newFixture, specificFixture} from '../controllers/fixture'
const router = express.Router()



router.post('/addFixture', newFixture)

router.get('/allfixture', specificFixture)



module.exports = router
