import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ReceitasService } from './receitas.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dtp';
import { AuthGuard } from '@nestjs/passport';


@Controller('api/v1/receitas')
@UseGuards(AuthGuard('jwt'))
export class ReceitasController {
  constructor(private readonly receitasService: ReceitasService) {}
  
  @Get()
  async index() {
    return await this.receitasService.findAll();
  }

  @Post()
  async store(@Body() body: CreateReceitaDto) {
    return await this.receitasService.store(body);
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.receitasService.findOneOrFail({ id });
  }

  @Put(':id')
  async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() body: UpdateReceitaDto) {
    return await this.receitasService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.receitasService.destroy(id);
  }
}
