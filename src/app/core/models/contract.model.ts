import { Guid } from 'guid-typescript';

export class Contract {
    id?: Guid;
    creationDate?: string;
    createdBy?: string;
    updateDate?: string;
    updatedBy?: string;
    Name?: string;
    StartDate?: string;
    EndDate?: string;
    CoeffSunday?: string;
    Status?: string;
    CoefBase?: string;
    CoeffOutOfBusinessWeek?: string;
    CoeffSaturday?: string;
    Description?: string;
    ContractId?:Guid;
    CustomerId_FK?:number;


   // customerId?: Guid;
    customerName?: string;
}

