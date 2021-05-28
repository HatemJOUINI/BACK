import { Guid } from 'guid-typescript';

export class Customer {
    id?: Guid;
    CustomerId?:Guid;
    creationDate?: string;
    createBy?: string;
    updateDate?: string;
    updatedBy?: string;
    Name?: string;
    Adress?: string;
    PhoneNumber?: string;
    Mail?: string;
    Description?: string;


    ContractId_FK?:number;
}
