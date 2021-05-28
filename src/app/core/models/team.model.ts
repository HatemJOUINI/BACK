import { Guid } from 'guid-typescript';

export class Team {
    id?: Guid;
    TeamId?: number;
    creationDate?: string;
    createBy?: string;
    updateDate?: string;
    updatedBy?: string;
    Name?: string;
    Type?: string;
    Description?: string;
}
