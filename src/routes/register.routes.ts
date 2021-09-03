import { Router } from 'express';

import CreateRegisterService from '../services/CreateRegisterService';

const registerRoutes = Router();

registerRoutes.post('/', async (request, response) => {
  const { name, email, CPF, phone, knowledges } = request.body;

  const createRegister = new CreateRegisterService();

  const register = await createRegister.execute({
    name,
    email,
    CPF,
    phone,
    knowledges,
  });

  return response.json({ register });
});

export default registerRoutes;
