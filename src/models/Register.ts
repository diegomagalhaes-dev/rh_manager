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

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  CPF: string;

  @Column()
  phone: string;

  @Column()
  validate: boolean;

  @OneToMany(() => Knowledge, knowledge => knowledge.register, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'register' })
  knowledges: Knowledge[];
}
