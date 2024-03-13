import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Custumer } from "./custumerModel";

@Entity()
export class Task {
    
    @PrimaryGeneratedColumn()
    idTask: number

    @Column({length: 30})
    title: string

    @Column({length: 400})
    description: string

    @OneToMany((type) => Custumer, (Custumer) => Custumer.tasks) //conexao com a tabela costumer numa cardinalidade 1:N
    custumer: Custumer
}