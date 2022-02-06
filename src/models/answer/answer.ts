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
import { AnswerSheet } from "../answer-sheet/answer-sheet";
import { QuestionOption } from "../question-option/question-option";
import { Question } from "../question/question";
import { User } from "../user/user";


@Entity({name: 'answer'})
export class Answer {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => AnswerSheet)
    @JoinColumn({name: 'answer_sheet_id'})
    answerSheet!: AnswerSheet;

    @ManyToOne(() => Question)
    @JoinColumn({name: 'question_id'})
    question!: Question;

    @ManyToOne(() => QuestionOption)
    @JoinColumn({name: 'option_id'})
    answer!: QuestionOption;

    @CreateDateColumn({name : "created_at"})
    createdAt!: Date;

    @UpdateDateColumn({name : "updated_at"})
    updatedAt!: Date;

    @ManyToOne(() => User)
    @JoinColumn({name: 'user_id'})
    user!: User;
}