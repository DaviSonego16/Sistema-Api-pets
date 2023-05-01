import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Postagem } from "../Models/postagem.model";

@Injectable()
export class PostagemService {
    constructor(
        @InjectModel(Postagem)
        private postagemModel: typeof Postagem
    ) {}

    async obterTodos(): Promise<Postagem[]> {
        return this.postagemModel.findAll();
    }

    async obterUm(id: number): Promise <Postagem> {
       const data = this.postagemModel.findByPk(id)
       return data
    }

    async criar(postagem: Postagem) {
        this.postagemModel.create(postagem)
    }

    async alterar(postagem: Postagem): Promise <[number, Postagem[]]> {
        return this.postagemModel.update(postagem, {
            where: {
                id: postagem.id
            }
        })
    }

    async apagar(id: number) {
        const post: Postagem = await this.obterUm(id);
        post.destroy()
    }
}