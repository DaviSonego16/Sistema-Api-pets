import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Postagem } from "../Models/postagem.model";
import { PostagemService } from "../Services/postagem.service";

@Controller('posts')
export class PostagemController {
    constructor(private postService: PostagemService) {

    }
    
    @Get('/tipo/:tipo')
    async obterTodos(@Param() params): Promise<Postagem[]> {
        return await this.postService.obterTodos(params.tipo)
    }

    @Post()
    async postar(@Body() postagem){
        this.postService.criar(postagem)
    }

    @Delete(':id')
    apagar(@Param() params){
        this.postService.apagar(params.id)
    }
}