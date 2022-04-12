import { Router, Request, Response } from 'express'
import { GetPokeEvolution } from '../controllers/pokemonController'
import Pokemon, { InterfacePokemons } from '../models/Pokemons'

const router: Router = Router()

router.get('/getAllPokemon', async (_req: Request, res: Response) => {
  try {
    const findAllPokemons: InterfacePokemons[] = await Pokemon.find().select(
      '-__v'
    )
    res.json(findAllPokemons)
  } catch (error) {
    console.log(error)
  }
})

router.get('/getEvolution', GetPokeEvolution)

export default router
