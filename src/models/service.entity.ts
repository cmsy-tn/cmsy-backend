/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, OneToMany } from "typeorm";
import BASE__ENTITY from "./base.entity";
import FAQ_ENTITY from "./faq.entity";

@Entity('service')
export default class SERVICE_ENTITY extends BASE__ENTITY {

    @Column()
    title: string;

    @Column({ type: 'text' })
    description: string;

    @Column()
    call_to_action: string;

    @Column()
    subServices: string;

    @Column({ default: false })
    service_has_faq: boolean;

    // *** RELATIONS
    @OneToMany(() => FAQ_ENTITY, (related_faqs) => related_faqs.services_related_to)
    @JoinColumn()
    related_faqs: FAQ_ENTITY[];
}