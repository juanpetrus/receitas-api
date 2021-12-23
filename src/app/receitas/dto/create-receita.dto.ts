import { IsNotEmpty } from 'class-validator'

export class CreateReceitaDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  ingredientes: string;

  @IsNotEmpty()
  preparo: string;
}