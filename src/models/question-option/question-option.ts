import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
    JoinTable,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { Question } from "../question/question";


@Entity({name: 'question_option'})
export class QuestionOption {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({name : "title", nullable: true})
    title!: string;

    @Column({name : "description", nullable: true})
    description!: string;

    @Column({name: "description_image", nullable: true})
    descriptionImage!: string;

    @Column({nullable: true, default: false})
    enable!: boolean;

    @CreateDateColumn({name : "created_at"})
    createdAt!: Date;

    @UpdateDateColumn({name : "updated_at"})
    updatedAt!: Date;

    @ManyToOne(() => Question, question => question.options)
    @JoinColumn({name: 'question_id'})
    question!: Question;
}