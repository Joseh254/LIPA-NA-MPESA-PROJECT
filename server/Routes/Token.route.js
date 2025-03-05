import { Router} from 'express'
import { CreateToken } from '../Controllers/token.js'
const router  = Router()

router.get("/token",CreateToken)
export default router;