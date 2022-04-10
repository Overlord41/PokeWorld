import { Request, Response } from 'express'

export const getUByPK = async (_req: Request, res: Response) => {
  res.send('Get user by ID')
}
