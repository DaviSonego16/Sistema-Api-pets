import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class Users extends Model<Users> {

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    Nome: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    Email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    Senha: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    Tipo: Number
}