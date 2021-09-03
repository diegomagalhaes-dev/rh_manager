import { Router } from 'express';

import registerRoutes from './register.routes';

const routes = Router();

routes.use('/register', registerRoutes);
export default routes;
