import { Router } from 'express';
import { getRepository } from 'typeorm';

const registerRoutes = Router();

import Register from '../models/Register';

registerRoutes.get('/', async (request, response) => {
  const registersRepository = getRepository(Register);

  const registers = await registersRepository.find();

  return response.json(registers);
});

registerRoutes.get('/:id', async (request, response) => {
  const { id } = request.params;

  const registersRepository = getRepository(Register);

  const registerId = await registersRepository.findOneOrFail(id);

  return response.json(registerId);
});

export default registerRoutes;
