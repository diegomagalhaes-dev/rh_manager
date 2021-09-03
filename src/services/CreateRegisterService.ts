import { response } from 'express';
import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import knowledge from '../models/Knowledge';
import Register from '../models/Register';

interface RequestRegister {
  name: string;
  email: string;
  CPF: string;
  phone?: string;
  knowledges: knowledge[];
}

class CreateRegisterService {
  public async execute({
    name,
    email,
    CPF,
    phone,
    knowledges,
  }: RequestRegister): Promise<Register> {
    const registerRepository = getRepository(Register);

    // testando se o registro é unico
    const checkCPFexists = await registerRepository.findOne({
      where: { CPF },
    });

    if (checkCPFexists) {
      throw new AppError('CPF number already used');
    }

    const register = registerRepository.create({
      name,
      email,
      CPF,
      phone,
      validate: false,
      knowledge: knowledges,
    });

    await registerRepository.save(register);

    return register;
  }
}
export default CreateRegisterService;
