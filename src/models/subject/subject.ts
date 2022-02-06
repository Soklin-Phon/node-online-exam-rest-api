import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
    JoinTable,
    OneToMany,
} from "typeorm";
import { Question } from "../question/question";


@Entity({name: 'subject'})
export class Subject {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({name : "name", nullable: true})
    name!: string;

    @Column({nullable: true, default: false})
    enable!: boolean;

    @CreateDateColumn({name : "created_at"})
    createdAt!: Date;

    @UpdateDateColumn({name : "updated_at"})
    updatedAt!: Date;

    @OneToMany(() => Question, question => question.subject)
    questions!: Array<Question>;
}