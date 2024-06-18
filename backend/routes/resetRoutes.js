import express from 'express';
import { destroyData, importData } from '../controllers/resetController.js';
const router = express.Router();

router.post('/destroy', destroyData);
router.post('/import', importData);

export default router;
