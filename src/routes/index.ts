import { Router } from 'express';

import registerRoutes from './register.routes';
import validateRoutes from './validate.routes';

const routes = Router();

routes.use('/register', registerRoutes);
export default routes;
routes.use('/registers', validateRoutes);
