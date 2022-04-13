import mongoose, { Schema, model } from 'mongoose'

export interface InterfaceUser extends mongoose.Document {
  NickName: string
  email: string
  favorites?: [number]
  type: string
}

const UserSchema = new Schema({
  NickName: {
    type: String,
    trim: true,
    unique: true,
  },
  email: { type: String, unique: true, lowercase: true },
  favorites: [Number],
  type: { type: String, default: 'normal', lowercase: true },
})

export default model<InterfaceUser>('User', UserSchema)
