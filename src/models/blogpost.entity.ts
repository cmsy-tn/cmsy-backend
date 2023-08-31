/* eslint-disable prettier/prettier */
import { Column, Entity } from "typeorm";
import BASE__ENTITY from "./base.entity";

@Entity('blogpost')
export default class BLOGPOST extends BASE__ENTITY {

    @Column()
    post_title: string;

    @Column({ type: 'text' })
    post_content: string;

    @Column()
    post_cover_image: string;

    @Column()
    post_status: string;
}