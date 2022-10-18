import { Teacher } from 'src/teacher/entities/teacher.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 50,
  })
  name: string;

  @OneToMany(() => Teacher, (teacher) => teacher.department)
  teachers: Teacher[];
}
