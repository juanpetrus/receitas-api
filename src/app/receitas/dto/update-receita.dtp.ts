import { IsNotEmpty } from 'class-validator'

export class UpdateReceitaDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  ingredientes: string;

  @IsNotEmpty()
  preparo: string;
}