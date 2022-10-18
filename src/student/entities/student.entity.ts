import { Profile } from 'src/profile/entities/profile.entity';
import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 30,
    name: 'first_name',
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 30,
    name: 'last_name',
  })
  lastName: string;

  @OneToOne(() => Profile)
  @JoinColumn({ name: 'profile_id' })
  profile: Profile;
}
