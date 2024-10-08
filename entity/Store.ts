import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Subscription } from "./Subscription";

@Entity('store', {schema: 'whiskey-notify'})
export class Store {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'store_idx'
    })
    idx: number;

    @Column({
        type: 'varchar',
        name: 'store_id',
        nullable: false,
        comment: '인스타 아이디'
    })
    id: string;

    @Column({
        type: 'varchar',
        name: 'store_phone'
    })
    phone: string;

    @Column({
        type: 'varchar',
        name: 'store_email'
    })
    email: string;

    @Column({
        type: 'varchar',
        name: 'store_name'
    })
    name: string;

    @Column({
        type: 'varchar',
        name: 'store_created_at'
    })
    createdAt: string;

    // @OneToMany(() => Subscription, subscription => subscription.store)
    // subscribe: Subscription[];
}