import { Like } from "src/likes/likes.model";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    login: string

    @Column()
    password: string

    // @ManyToOne(() => Like, (like) => like.cat_id, { onDelete: 'CASCADE'})
    // likes: Like[]
}
