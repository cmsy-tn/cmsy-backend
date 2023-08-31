import { Column, Entity } from "typeorm";
import BASE__ENTITY from "./base.entity";


@Entity('profile')
export default class PROFILE_ENTITY extends BASE__ENTITY {
    @Column({ nullable: true })
    profile_first_name: string;

    @Column({ nullable: true })
    profile_last_name: string;

    @Column({ nullable: true })
    profile_profile_picture: string;

    @Column()
    profile_authentication_id: string;
}