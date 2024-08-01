import { Router } from 'express';
import movieController from '../controllers/movieController.js';
const router = Router();
router.use('/movies', movieController);
export default router;
