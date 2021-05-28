import { Guid } from 'guid-typescript';

export class TimesheetTaskWeek {
    id?: Guid;
    IsGuard?: boolean;
    Billable?: boolean;
    Comment?:string;
    day1?: string;
    day2?: string;
    day3?: string;
    day4?: string;
    day5?: string;
    day6?: string;
    day7?: string;
    TaskId_FK?:string;
    UserId?:string;
    

    requirementName?: string;
    requirementDescription?: string;
    userTaskId?: Guid;
    taskDescription?:string;
    taskType?:string;
    weekStartDate?: string;
   


    userId?: Guid; // for add
}
