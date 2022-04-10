import { Router } from 'express'

// importing Routes
import UsersRouter from './userRoutes'
import PokeRouter from './pokemonRoutes'

const router: Router = Router()

router.use('/users', UsersRouter)

router.use('/pokemons', PokeRouter)

export default router
