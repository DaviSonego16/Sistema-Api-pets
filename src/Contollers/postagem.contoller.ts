import { Body, Controller, Delete, Get, Param, Post, Put, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { Postagem } from "../Models/postagem.model";
import { PostagemService } from "../Services/postagem.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from 'multer'
import path, { extname, join } from "path";

@Controller('posts')
export class PostagemController {
    constructor(private postService: PostagemService) {

    }
    
    @Get()
    async obterTodos(): Promise<Postagem[]> {
        const postagens = await this.postService.obterTodos()
        for(var postagem in postagens){
            console.log(postagem, postagens[postagem])
        }
        return postagens
    }

    @Get(':id')
    async obterUm(@Param() params, @Res() res): Promise <Postagem> {
        const postagem = this.postService.obterUm(params.id)
        return (res.sendFile(join(process.cwd(),(await postagem).Img)))
    }

    @Post()
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: '../uploads/fotos',
            filename: (req, file, cb) => {
                const nomeArquivo = Date.now() + file.originalname
                cb(null, `${nomeArquivo}`)
            }
        })
    }))
    async postar(@UploadedFile() file, @Body() postagem){
        postagem.Img = file.path
        this.postService.criar(postagem)
        return console.log("titulo: " + postagem.titulo + "     arquivo: " + file.path)
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