import mongoose from 'mongoose'
import config from '../config'

// connection
export const conMongoose = async () => {
  await mongoose
    .connect(`${config.URI}${config.DB_NAME}`)
    .then((_db) => console.log('db is connect'))
    .catch((error) => console.log(error))
}
