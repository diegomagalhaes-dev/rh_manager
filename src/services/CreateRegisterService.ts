import { response } from 'express';
import { getRepository } from 'typeorm';

import * as Yup from 'yup';

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

    const data = {
      name,
      email,
      CPF,
      phone,
      validate: false,
      knowledges,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required().max(100),
      email: Yup.string().required().max(100),
      CPF: Yup.string().required().max(14),
      phone: Yup.string(),
      knowledges: Yup.array(
        Yup.object().shape({
          title: Yup.string().required(),
          category: Yup.string().required(),
        }),
      )
        .required()
        .min(1)
        .max(3),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const register = registerRepository.create(data);

    await registerRepository.save(register);

    return register;
  }
}
export default CreateRegisterService;
