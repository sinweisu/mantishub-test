import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ArticleDto {
  // Validates for a non-empty string
  @IsString()
  @IsNotEmpty()
  public title: string;

  // Gets only validated if it's part of the request's body
  @IsString()
  @IsOptional()
  public content: string;

  // Validates for an boolean
  @IsBoolean()
  @IsOptional()
  public isPrivate: boolean;
}
