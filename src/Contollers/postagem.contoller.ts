import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Postagem } from "../Models/postagem.model";
import { PostagemService } from "../Services/postagem.service";

@Controller('posts')
export class PostagemController {
    constructor(private postService: PostagemService) {

    }
    
    @Get()
    async obterTodos(): Promise <Postagem[]> {
        return this.postService.obterTodos()
    }

    @Get(':id')
    async obterUm(@Param() params): Promise <Postagem> {
        return this.postService.obterUm(params.id)
    }
 
    @Post()
    async criar(@Body() postagem: Postagem) {
        this.postService.criar(postagem)
    }

    @Put()
    async alterar(@Body() postagem: Postagem):Promise <[number, Postagem[]]> {
        return this.postService.alterar(postagem)
    }

    @Delete(':id')
    apagar(@Param() params){
        this.postService.apagar(params.id)
    }
}