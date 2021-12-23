import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UsersEntity } from '../users/users.entity';

@Entity({name: 'receitas'})
export class ReceitasEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name: 'name'})
  name: string;

  @Column()
  ingredientes: string;

  @Column()
  preparo: string;

  @ManyToOne(() => UsersEntity)
  user_id: UsersEntity;

  @CreateDateColumn({name: 'created_at'})
  createdAt: string;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: string;

  @DeleteDateColumn({name: 'deleted_at'})
  deletedAt: string;

}