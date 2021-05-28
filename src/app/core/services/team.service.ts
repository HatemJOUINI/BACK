import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Team } from '../models/team.model';
import * as uuid from 'uuid';
import { CreateTeam } from 'src/app/management-tool/timesheet/modal/create-team.model';
@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private apiService: ApiService
  ) {}

  getAll(): Observable<Team[]> {
    return this.apiService.get('api/TeamUser');
  }


  create(team:any ): Observable<Team> {
    console.log(team);
  //  team.Type="KKK";
    //team.Id=Math.floor(Math.random() * 1000);
    
    return this.apiService.post('api/TeamUser/', team);
  }

  destroy(teamId: string): Observable<boolean> {
    console.log(teamId);
    return this.apiService.delete('api/TeamUser/' + teamId);
  }

  update(team: Team) {
    return this.apiService.put('api/TeamUser/', team);
  }

}
