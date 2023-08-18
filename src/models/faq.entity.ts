/* eslint-disable prettier/prettier */
import { Column, Entity } from "typeorm";
import BASE__ENTITY from "./base.entity";

@Entity('faq')
export default class FAQ_ENTITY extends BASE__ENTITY {

    @Column()
    question: string;

    @Column()
    answer: string;

    @Column({ default: false })
    hasCategory: boolean;

    @Column({ default: '' })
    category: string;
}