import { Router, Request, Response } from 'express'
import { getUByPK } from '../controllers/usersController'

const router: Router = Router()

router.get('/getUserByPK', getUByPK)

router.post('/createUser', (_req: Request, res: Response) => {
  res.send('Create user success')
})

export default router
