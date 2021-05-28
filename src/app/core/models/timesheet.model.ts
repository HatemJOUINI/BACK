import { Guid } from 'guid-typescript';

export class Timesheet {
    id?: Guid;
    creationDate?: string;
    createdBy?: string;
    updateDate?: string;
    updatedBy?: string;
    Date?: string;
    Duration?: number;
    Comment?: string;
    IsGuard?: boolean;
    Billable?: boolean;
    TimesheetId?:number


    userTaskId?: Guid;
    userTaskDescription?: string;
    userTaskRequirementNom?: string;
    userId?: Guid; // for add
}
