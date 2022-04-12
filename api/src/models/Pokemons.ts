import mongoose, { Schema, model } from 'mongoose'

export interface InterfacePokemons extends mongoose.Document {
  order: number
  name: string
  types: [string]
  stats?: [{ name: string; baseStat: number }]
  imgPoke: string
}

const PokeSchema = new Schema({
  order: Number,
  name: String,
  types: [String],
  stats: [{ name: String, baseStat: Number }],
  imgPoke: String,
})

export default model<InterfacePokemons>('Pokemon', PokeSchema)
