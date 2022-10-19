import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
    private userService: UserService,
  ) {}

  async create(article: Article) {
    await this.articleRepository.save(article);
  }

  async findAll() {
    return await this.articleRepository.find({
      relations: {
        user: true,
      },
    });
  }

  async findOne(id: number) {
    return this.articleRepository
      .createQueryBuilder('article')
      .where('article.id = :id', { id })
      .getOne();
  }

  async update(id: number, updateArticleDto: Article) {
    await this.articleRepository.update(id, updateArticleDto);
    const updatedTodo = await this.articleRepository
      .createQueryBuilder('article')
      .where('article.id = :id', { id })
      .getOne();
    if (updatedTodo) {
      return updatedTodo;
    }
  }

  async remove(id: number) {
    await this.articleRepository.delete({ id });
    console.log(`Article #${id}`);
  }
}