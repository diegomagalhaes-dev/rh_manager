import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import Knowledge from './Knowledge';

@Entity('registers')
export default class Register {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 100,
  })
  name: string;

  @Column({
    length: 100,
  })
  email: string;

  @Column({
    length: 14,
  })
  CPF: string;

  @Column()
  phone: string;

  @Column()
  validate: boolean;

  @OneToMany(() => Knowledge, knowledge => knowledge.register, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'register' })
  knowledge: Knowledge[];
}
