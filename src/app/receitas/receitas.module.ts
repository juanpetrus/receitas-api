import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReceitasController } from './receitas.controller';
import { ReceitasService } from './receitas.service';
import { ReceitasEntity } from './receitas.entity';


@Module({
  imports: [TypeOrmModule.forFeature([ReceitasEntity])],
  controllers: [ReceitasController],
  providers: [ReceitasService],
  exports: [ReceitasService]
})
export class ReceitasModule {}
