import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Store } from "./Store";

@Entity('subscription', {schema: 'whiskey-notify'})
export class Subscription {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'subscribe_idx'
    })
    idx: number;

    @Column({
        type: 'varchar',
        name: 'store_id',
        nullable: false,
        comment: '인스타 아이디'
    })
    storeId: string;

    @Column({
        type: 'varchar',
        name: 'user_id',
        length: 20,
        nullable: false
    })
    userId: string;

    @Column({
        type: 'varchar',
        name: 'subscribe_created_at'
    })
    createdAt: string;

    // @ManyToOne(() => User, user => user.subscribe)
    // user: User;

    // @ManyToOne(() => Store, store => store.subscribe)
    // store: Store;
}