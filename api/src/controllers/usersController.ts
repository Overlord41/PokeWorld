import { Request, Response } from 'express'
import User, { InterfaceUser } from '../models/User'

export const getUByPK = async (req: Request, res: Response): Promise<void> => {
  const { idUser } = req.body
  const findUser: (InterfaceUser & { _id: any }) | null = await User.findById(
    idUser
  ).select('-__v')
  res.json(findUser)
}

export const getAllUsers = async (
  _req: Request,
  res: Response
): Promise<void> => {
  const user: InterfaceUser[] = await User.find().select('-__v')
  res.json(user)
}

export const postUser = async (req: Request, res: Response): Promise<void> => {
  const { NickName, email, favorites } = req.body
  const user: InterfaceUser = new User({ NickName, email, favorites })
  await user
    .save()
    .then((resp) => {
      if (resp) {
        res.send('Usuario ha sido creado')
      }
    })
    .catch((_error) => res.send('Este usuario ya existe'))
}
