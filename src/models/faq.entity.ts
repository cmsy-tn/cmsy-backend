/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne } from "typeorm";
import BASE__ENTITY from "./base.entity";
import SERVICE_ENTITY from "./service.entity";

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

    // *** RELATIONS
    @ManyToOne(() => SERVICE_ENTITY, (services_related_to) => services_related_to.related_faqs)
    services_related_to: SERVICE_ENTITY;
}