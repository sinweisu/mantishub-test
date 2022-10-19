import { Comment } from 'src/comment/entities/comment.entity';
import { Tag } from 'src/tag/entities/tag.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'text',
  })
  content: string;

  @Column({
    type: 'bool',
    default: false,
    nullable: false,
    name: 'is_private',
  })
  isPrivate: boolean;

  @ManyToOne(() => User, (user) => user.articles)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Comment, (comment) => comment.article)
  comments: Comment[];

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];

  @CreateDateColumn({
    type: 'timestamptz',
    name: 'created_at',
  })
  createdAt: Date;

  @Column({
    type: 'timestamptz',
    name: 'updated_at',
    nullable: true,
  })
  updatedAt: Date;
}
