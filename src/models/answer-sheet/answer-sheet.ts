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
import { User } from "../user/user";


@Entity({name: 'answer_sheet'})
export class AnswerSheet {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({name: 'current', default: 0, nullable: true})
    current!: number;

    @Column({name: 'started', nullable: true, default: false})
    started!: boolean;

    @Column({name: 'started_at', nullable: true})
    startedAt!: Date;

    @Column({name: 'submitted', nullable: true, default: false})
    submitted!: boolean;

    @Column({name: 'submitted_at', nullable: true})
    submittedAt!: Date;

    @CreateDateColumn({name : "created_at"})
    createdAt!: Date;

    @UpdateDateColumn({name : "updated_at"})
    updatedAt!: Date;

    @ManyToOne(() => User)
    @JoinColumn({name: 'user_id'})
    user!: User;
}