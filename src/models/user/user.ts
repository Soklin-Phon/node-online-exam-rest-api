import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
    JoinTable,
} from "typeorm";

@Entity({name: 'user'})
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({name : "name", nullable: true})
    name!: string;

    @Column({name : "username"})
    username!: string;

    @Column({name : "password"})
    password!: string;

    @Column({name : "phone"})
    phone!: string;

    @Column({nullable: true, default: false})
    enable!: boolean;

    @Column({name : "type", default: "ONLINE"})
    type!: string;

    @Column({name: "image" ,nullable: true})
    image!: string;

    @CreateDateColumn({name : "created_at"})
    createdAt!: Date;

    @UpdateDateColumn({name : "updated_at"})
    updatedAt!: Date;
}