import express from 'express'

const router = express.Router()

router.get('getAllPokemon', (_req, res)=>{
    res.send('All pokemons')
})

export default router