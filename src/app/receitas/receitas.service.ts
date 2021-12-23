import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindConditions, FindOneOptions } from 'typeorm';
import { ReceitasEntity } from './receitas.entity';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dtp';

@Injectable()
export class ReceitasService {
  constructor(
    @InjectRepository(ReceitasEntity)
    private readonly receitasRepository: Repository<ReceitasEntity>
  ) {}

  async findAll() {
    return await this.receitasRepository.find();
  }

  async findOneOrFail(conditions: FindConditions<ReceitasEntity>, options?: FindOneOptions<ReceitasEntity>) {
    try {
      return await this.receitasRepository.findOneOrFail(conditions, options)
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: CreateReceitaDto) {
    const user = this.receitasRepository.create(data)
    return await this.receitasRepository.save(user);
  }

  async update(id: string, data: UpdateReceitaDto) {
    const user = await this.findOneOrFail({ id });
    this.receitasRepository.merge(user, data);
    return await this.receitasRepository.save(user);
  }

  async destroy(id: string) {
    await this.receitasRepository.findOneOrFail({ id });
    this.receitasRepository.softDelete({ id });
  }
}
