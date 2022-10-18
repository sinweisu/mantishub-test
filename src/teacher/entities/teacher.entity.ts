import { Department } from 'src/department/entities/department.entity';
import { Profile } from 'src/profile/entities/profile.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Teacher {
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

  @ManyToOne(() => Department, (department) => department.teachers)
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @OneToOne(() => Profile)
  @JoinColumn({ name: 'profile_id' })
  profile: Profile;
}
