import {Router} from 'express'
import Paths from '../enums/paths'

const router = Router()

 router.get(Paths.root.login, (req: any, res: any) => {
    res.send('Paths.root.login')
 })

 export default router