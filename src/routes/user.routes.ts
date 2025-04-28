import { Router } from 'express';

const router = Router();

import { 
    postUser, 
    getAllUsers, 
    getUserById, 
    deleteUserById, 
    updateUserById, 
    deactivateUserById, 
    getUserPackets, 
    addPacketToUser, 
    getUserByName
} from '../controllers/user.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

router.get("/", getAllUsers);
router.post("/", postUser);
router.get("/me", authMiddleware, (req, res, next) => {
    console.log("Middleware ejecutado, nombre extraído:", req.user?.name); // Log para verificar
    req.params.name = req.user?.name;
    next();
}, getUserByName);
router.get('/:id', getUserById);
router.get('/name/:name', getUserByName);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);
router.put('/:id/deactivate', deactivateUserById);
router.get('/:id/packets', getUserPackets);
router.post('/:name/packets', addPacketToUser);


export default router;