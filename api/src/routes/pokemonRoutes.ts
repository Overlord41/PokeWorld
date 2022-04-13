import { Router } from 'express'
import {
  filterPokemons,
  getAllPokemons,
  GetPokeEvolution,
} from '../controllers/pokemonController'

const router: Router = Router()

router.get('/getAllPokemon', getAllPokemons)

router.get('/filters', filterPokemons)

router.get('/getEvolution', GetPokeEvolution)

export default router
