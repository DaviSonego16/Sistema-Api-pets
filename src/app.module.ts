import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { AppController } from './Contollers/app.controller';
import { PostagemController } from './Contollers/postagem.contoller';
import { UserController } from './Contollers/user.controller';
import { Postagem } from './Models/postagem.model';
import { Users } from './Models/users.model';
import { AppService } from './Services/app.service';
import { PostagemService } from './Services/postagem.service';
import { UserService } from './Services/users.service';

const env = process.env

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: env.SQL_HOST,
      port: Number(env.SQL_PORT),
      username: env.SQL_USER,
      password: env.SQL_PASSWORD,
      database: env.SQL_DB,
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([Postagem, Users])
  ],
  controllers: [AppController, PostagemController, UserController],
  providers: [AppService, PostagemService, UserService]
})
export class AppModule {}
