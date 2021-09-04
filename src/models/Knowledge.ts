import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Register from './Register';

@Entity('knowledges')
export default class Knowledge {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  category: string;

  @ManyToOne(() => Register, register => register.knowledges)
  @JoinColumn({ name: 'register' })
  register: Register;
}
