import { Router } from 'express'
import { getUByPK, postUser } from '../controllers/usersController'

const router: Router = Router()

router.get('/getUserByPK', getUByPK)

router.post('/createUser', postUser)

export default router
