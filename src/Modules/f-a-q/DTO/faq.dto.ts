import { IsString } from 'class-validator'

export class CREATE_FAQ_DTO {
    @IsString()
    readonly question: string;

    @IsString()
    readonly answer: string;
}

export class UPDATE_FAQ_DTO {
    @IsString()
    readonly question: string;

    @IsString()
    readonly answer: string;
}