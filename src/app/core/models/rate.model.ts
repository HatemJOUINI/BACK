import { Guid } from "guid-typescript";

export class Rate {

    id?: Guid;
    RateId?:number;
    ContractId_FK?:number;
    EmployeId_FK?:number;
    StartDate?:Date;               
    Value?: string;
    contractName?:string;
    creationDate?: string;
    createBy?: string;
    updateDate?: string;
    updatedBy?: string;


    contractId?: string;
    userId?: string;
}
