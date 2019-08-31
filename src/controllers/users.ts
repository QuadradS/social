import { Router, Request, Response } from 'express'
import { UserDTO } from '../dto/userDto'

const router = Router()

function user(req: Request, res: Response) {
    res.send('r423')
}

router.post('/user1', user)

export default router