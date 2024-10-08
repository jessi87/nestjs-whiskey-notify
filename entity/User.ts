import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Subscription } from "./Subscription";
import { subscribe } from "diagnostics_channel";

@Entity()
export class User {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'user_idx'
    })
    idx: number;

    @Column({
        type: 'varchar',
        name: 'user_id',
        length: 20,
        nullable: false
    })
    id: string;

    @Column({
        type: 'varchar',
        name: 'user_password',
        length: 20,
        nullable: false
    })
    password: string;

    @Column({
        type: 'varchar',
        name: 'user_phone'
    })
    phone: string;

    @Column({
        type: 'varchar',
        name: 'user_email'
    })
    email: string;

    @Column({
        type: 'varchar',
        name: 'user_name'
    })
    name: string;

    @Column({
        type: 'varchar',
        name: 'user_created_at'
    })
    createdAt: string;

    // @OneToMany(() => Subscription, subscription => subscription.user)
    // subscribe: Subscription[];
}