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
import { QuestionOption } from "../question-option/question-option";
import { QuestionSheet } from "../question-sheet/question-sheet";
import { Question } from "../question/question";
import { Subject } from "../subject/subject";


@Entity({name: 'question_sheet_order'})
export class QuestionSheetOrder {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({name: 'ordering', nullable: true})
    ordering!: number;

    @ManyToOne(() => QuestionOption)
    @JoinColumn({name: 'correct_option_id'})
    correctOption!: QuestionOption;

    @ManyToOne(() => Question)
    @JoinColumn({name: 'question_id'})
    question!: Question;

    @ManyToOne(() => QuestionSheet, questionSheet => questionSheet.questions)
    questionSheet!: QuestionSheet;
}