import { Router, Request, Response } from 'express'

const router: Router = Router()

router.get('/getAllPokemon', (_req: Request, res: Response) => {
  res.send('All pokemons')
})

export default router
