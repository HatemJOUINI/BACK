import { Guid } from 'guid-typescript';

export class Requirement {
    id?: Guid;
    creationDate?: string;
    createBy?: string;
    updateDate?: string;
    updateBy?: string;
    Description?: string;
    Type?: string;
    Status?: number;
    Nom?: string;
    RequirementId?:number;
    StartDate?: string;
    ClosingDate?: string;
    ParentRequirementId?: Guid;
    ContractId?: Guid;
    ReleaseId?: Guid;




    parentRequirementName?: Guid;
    contractName?: string;
    releaseDescription?: string;

    

}
