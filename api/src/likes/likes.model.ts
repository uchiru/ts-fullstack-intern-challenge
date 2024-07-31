import { User } from "src/users/users.model";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Like {

    @PrimaryColumn()
    cat_id:string

    @Column()
    user_id: number

    @Column()
    url: string

    @CreateDateColumn()
    created_at: Date
}
