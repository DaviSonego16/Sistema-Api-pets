import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Postagem extends Model<Postagem> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Titulo: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Descricao: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Metodo_Contato: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  Tipo_pub: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  Img: string;
}
