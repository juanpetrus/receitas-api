import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './app/users/users.module';
import { AuthModule } from './auth/auth.module';
import { ReceitasModule } from './app/receitas/receitas.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.APP_CONNECTION,
      host: process.env.APP_HOST,
      port: process.env.APP_PORT,
      username: process.env.APP_USERNAME,
      password: process.env.APP_PASSWORD,
      database: process.env.APP_DATABASE,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      synchronize: true,

    } as TypeOrmModuleOptions), UsersModule, AuthModule, ReceitasModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
