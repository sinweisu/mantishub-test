import { PartialType } from '@nestjs/swagger';
import { ArticleDto } from './articleDto.dto';

export class UpdateArticleDto extends PartialType(ArticleDto) {}
