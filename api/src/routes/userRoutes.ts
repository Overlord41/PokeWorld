import express from 'express'

const router = express.Router()

router.get('/getUserByPK', (_req, res)=>{
    res.send('Get user')
})

router.post('/postUser',(_req, res)=>{
    res.send('Create user success')
})

export default router