import { Guid } from 'guid-typescript';

export class UserTask {
    id?: Guid;
    creationDate?: string;
    createdBy?: string;
    updateDate?: string;
    updatedBy?: string;
    EstimateWorkLoad?: string;
    tofinalise?: number;
    Description?: string;
    Status?: string;
    ClosingDate?: string;
    StartDate?: string;
    RequirementId?: Guid;
    userId?: Guid;
    IsValidated?: string;
    Date_Holiday?:Date;
    Duration_Holiday?:Date;
    //startDate?: string;
    
    Type?: string;
    
    requirementNom?: string;

    userFullName?: string;

    IsGuard?: string; // for add task
    Billable? :string; // for add task

    requirementDescription?: string;
}

