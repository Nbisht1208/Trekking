import express from 'express';
import { protect } from '../middleware/auth.js';
import { login, verify, changePassword } from '../controllers/adminController.js';

const router = express.Router();

router.post('/login', login);
router.get('/verify', protect, verify);
router.patch('/change-password', protect, changePassword);

export default router;