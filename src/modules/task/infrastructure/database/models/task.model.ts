import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table({
  tableName: 'tasks',
  timestamps: false,
})
export class TaskModel extends Model {
  @PrimaryKey
  @Column
  declare id: string;

  @Column
  declare title: string;

  @Column
  declare completed: boolean;

  @Column
  declare createdAt: Date;
}