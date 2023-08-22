/* eslint-disable prettier/prettier */
import { Column, Entity, Long } from "typeorm";
import BASE__ENTITY from "./base.entity";

@Entity('faq')
export default class FAQ_ENTITY extends BASE__ENTITY {

    @Column()
    question: string;

    @Column({ type: 'text' })
    answer: string;

    @Column({ default: false })
    hasCategory: boolean;

    @Column({ default: '' })
    category: string;
}