import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { hashSync } from 'bcrypt';
import { ReceitasEntity } from '../receitas/receitas.entity';

@Entity({name: 'users'})
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name: 'name'})
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn({name: 'created_at'})
  createdAt: string;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: string;

  @DeleteDateColumn({name: 'deleted_at'})
  deletedAt: string;

  @OneToMany(() => ReceitasEntity, receitas => receitas.user_id)
  receitas: ReceitasEntity[]

  @BeforeInsert()
  hashPassowrd() {
    this.password = hashSync(this.password, 10)
  }
}