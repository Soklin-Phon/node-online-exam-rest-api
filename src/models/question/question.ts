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
    OneToMany,
} from "typeorm";
import { QuestionOption } from "../question-option/question-option";
import { Subject } from "../subject/subject";


@Entity({name: 'question'})
export class Question {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({name : "title", nullable: true})
    title!: string;

    @Column({name : "description", nullable: true})
    description!: string;

    @Column({name: "description_image", nullable: true})
    descriptionImage!: string;

    @Column({name: "figure", nullable: true})
    figure!: string;

    @Column({name: "figure_image", nullable: true})
    figureImage!: string;

    @Column({nullable: true, default: false})
    enable!: boolean;

    @CreateDateColumn({name : "created_at"})
    createdAt!: Date;

    @UpdateDateColumn({name : "updated_at"})
    updatedAt!: Date;

    @ManyToOne(() => Subject, subject => subject.questions)
    @JoinColumn({name: "subject_id"})
    subject!: Subject;

    @OneToMany(() => QuestionOption, option => option.question)
    options!: QuestionOption;
}