// config.js
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

interface intConfig {
  NODE_ENV: string
  HOST: string
  PORT: number
  URI: string
  DB_NAME: string
}

const configApp: intConfig = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || '127.0.0.1',
  PORT: Number(process.env.PORT) || 3001,
  URI: process.env.URI || 'mongodb://localhost/',
  DB_NAME: process.env.DB_NAME || 'pokeworld',
}

export default configApp
