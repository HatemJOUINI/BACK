import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Requirement } from '../models/requirement.model';
import { Observable } from 'rxjs';
import { CreateRequirement } from 'src/app/management-tool/timesheet/modal/create-requirement.model';
@Injectable({
  providedIn: 'root'
})
export class RequirementService {

  constructor(
    private apiService: ApiService
  ) {}

  getAll(): Observable<Requirement[]> {
    return this.apiService.get('api/Requirement');
  }

  create(requirement: any): Observable<Requirement> {
    console.log (requirement) ;
    return this.apiService.post('api/Requirement/', requirement);
  }



  destroy(requirementId: string): Observable<number> {
    return this.apiService.delete('api/Requirement/' + requirementId);
  }

  update(requirement: Requirement) {
    return this.apiService.put('api/Requirement/', requirement);
  }


}
