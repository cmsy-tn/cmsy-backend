import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from "typeorm";

export default class BASE__ENTITY {

    @PrimaryColumn()
    id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}