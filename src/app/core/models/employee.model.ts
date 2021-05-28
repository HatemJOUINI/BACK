import { Guid } from 'guid-typescript';
import { ContractRate } from './contractrate.model';
export class Employee {
    id?: Guid;
    IdentityId?: string ;
    EmployeId?:  Guid ;
    TimesheetIdFk?:  Guid ;
    Type?: string ;
    StartDate? : string ; 
    Adress? :string ; 
    Birthday? :string ;
    CIN? :   string ;
    City? :string ;
    CivilStatus? :string ; 
    registrationNumber?:string ;  
    Function? : string ; 
    PhoneNumber?: string ;
    creationDate?: string;
    createBy?: string;
    updateDate?: string;
    updatedBy?: string;
    Role:string;
    LastName?: string;
    FirstName?: string;
    Email?: string;



  

  
    userName?: string;
    password?: string;
    contractrate:ContractRate[];
    
    
}
