import { Module } from '@nestjs/common';
import { AppController } from './Contollers/app.controller';
import { AppService } from './Services/app.service';
import { PostagemController } from './Contollers/postagem.contoller';
import { PostagemService } from './Services/postagem.service';
import { UserController} from './Contollers/user.controller';
import { UserService } from './Services/users.service';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { Postagem } from './Models/postagem.model';
import { Users } from './Models/users.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.SENHA_BANCO_DADOS,
      database: 'sistema-pet',
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([Postagem, Users])
  ],
  controllers: [AppController, PostagemController, UserController],
  providers: [AppService, PostagemService, UserService]
})
export class AppModule {}
