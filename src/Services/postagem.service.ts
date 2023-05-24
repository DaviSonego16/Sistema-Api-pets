import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Postagem } from "../Models/postagem.model";

@Injectable()
export class PostagemService {
    constructor(
        @InjectModel(Postagem)
        private postagemModel: typeof Postagem
    ) {}

    async obterTodos(tipo: number): Promise<Postagem[]> {
        return this.postagemModel.findAll({
            where: {
                Tipo_pub: tipo
            }
        });
    }

    async obterUm(id: number): Promise <Postagem> {
       const data = this.postagemModel.findByPk(id)
       return data
    }

    async criar(postagem) {
        this.postagemModel.create(postagem)
    } 


    async apagar(id: number) {
        const post: Postagem = await this.obterUm(id);
        post.destroy()
    }
}