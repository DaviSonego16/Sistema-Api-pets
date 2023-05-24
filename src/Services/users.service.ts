import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Users } from "../Models/users.model";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(Users)
        private userModel: typeof Users
    ) {}

    async obterTodos(): Promise<Users[]> {
        return this.userModel.findAll();
    }

    async obterUm(id: number): Promise <Users> {
       const data = this.userModel.findByPk(id)
       return data
    }

    async criar(user: Users) {
        this.userModel.create(user)
    }

    async apagar(id: number) {
        const user: Users = await this.obterUm(id);
        user.destroy()
    }
}