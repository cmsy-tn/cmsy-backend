/* eslint-disable prettier/prettier */
import { Column, Entity } from "typeorm";
import BASE__ENTITY from "./base.entity";

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

    // @Column()
    // service_faqs: FAQ_ENTITY[];
}