import { Guid } from 'guid-typescript';
export class MonthlyTsByContract {
    id?: Guid;
    lastName?: string;
    firstName?: string;
    totalH?: number;
    totBusinessH?: number;
    totOutBusinessHWeek?: number;
    totOutBusinessHSaturday?: number;
    totOutBusinessHSunday?: number;
    holiday?: number;
    illness?: number;
    rest?: number;
}
