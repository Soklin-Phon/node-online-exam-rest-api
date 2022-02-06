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
import { QuestionSheetOrder } from "../question-sheet-order/question-sheet-order";
import { Subject } from "../subject/subject";


@Entity({name: 'question_sheet'})
export class QuestionSheet {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({name : "name", nullable: true})
    name!: string;

    @Column({name: 'type', nullable: true, default: 'TRAIL'})
    type!: string;

    @Column({name: 'start_at'})
    startAt!: Date;

    @Column({nullable: true, default: false})
    enable!: boolean;

    @CreateDateColumn({name : "created_at"})
    createdAt!: Date;

    @UpdateDateColumn({name : "updated_at"})
    updatedAt!: Date;

    @ManyToOne(() => Subject)
    @JoinColumn({name: 'subject_id'})
    subject!: Subject;

    @OneToMany(() => QuestionSheetOrder, question => question.questionSheet)
    questions!: Array<QuestionSheetOrder>; 
}