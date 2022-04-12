import express from 'express'
import cors from 'cors'
import config from '../config'
import dotenv from 'dotenv'

// importing Routes
import RoutesPokeWorld from './routes/index'
import { conMongoose } from './database'
// import { updatePokemons } from './updates/pokeUpdates'

// configuración variables de entorno
dotenv.config({ path: '../.env' })

//  initializations
const app = express()
conMongoose()

// middleware
app.use(express.json()) // middleware que transforma el req.body a un json
app.use(cors())
app.use('/api', RoutesPokeWorld)

// start the server
app.listen(config.PORT, () => {
  // updatePokemons()
  console.log(`Server listen on port ${config.PORT}`)
})
