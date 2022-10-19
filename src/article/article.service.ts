import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticleDto } from './dto/articleDto.dto';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  async create(article: ArticleDto) {
    await this.articleRepository.save(article);
  }

  async findAll() {
    return await this.articleRepository.find({
      relations: {
        user: true,
        tags: true,
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
