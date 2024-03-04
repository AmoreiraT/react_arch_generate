import { Router } from 'express';
import { createProject } from '../createApp/controllers/createApp_controller';

const router = Router();

router.post('/create-project', createProject);

export default router;
