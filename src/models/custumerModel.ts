import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, Table} from "typeorm"
import { Task } from "./taskModel"

@Entity()
export class Custumer{
    @PrimaryGeneratedColumn()
    idCostumer: number

    @Column({length: 50})
    name: string

    @Column({length: 70})
    email: string

    @Column()
    isActive: boolean

    @ManyToOne((type)=> Task, (Task) => Task.custumer)//conexao com a tabela task com a cardinalidade de 1:N
    tasks: Task[]
}