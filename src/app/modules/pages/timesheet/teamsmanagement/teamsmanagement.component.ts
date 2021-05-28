import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbDialogService } from '@nebular/theme';
import { CreateTeamComponent } from 'src/app/modules/modals/teamsmanagement/create-team/create-team.component';
import { AssignUserToTeamComponent } from 'src/app/modules/modals/usersmanagement-modals/assign-user-to-team/assign-user-to-team.component';
import { Team } from 'src/app/core/models/team.model';
import { TeamService } from 'src/app/core/services/team.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ButtonListEmployeesRenderComponent } from 'src/app/modules/renderers/button-list-employees-render.component';
import { ButtonListEmployeesTeamRenderComponent } from 'src/app/modules/renderers/button-list-employees-team-render.component';
import { NbAccessChecker } from '@nebular/security';
import { CustomEditorTeamType } from 'src/app/modules/renderers/custom-editor-team-type';
import { DeleteErrorComponent } from 'src/app/modules/modals/delete-error/delete-error.component';
import { ExcelService } from 'src/app/core/services/ExcelService';

@Component({
  selector: 'app-teamsmanagement',
  templateUrl: './teamsmanagement.component.html',
  styleUrls: ['./teamsmanagement.component.css']
})
export class TeamsmanagementComponent implements OnInit {
  public loading = false; //for loading
  public teams: Team[] = [];
  public source: LocalDataSource;
 // public data: data[] = [];
 // ExcelService: any;

  constructor(
    private ExcelService : ExcelService,
    private teamService: TeamService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    public accessChecker: NbAccessChecker) { }

  //  Exportelx(): void {  
   //   this.ExcelService.exportAsExcelFile(this.data, "simple")  
 // }  
 

  settings = {
    pager: {
      display: true,
      perPage: 10
    },
    hideSubHeader: false,
    actions: {
      add: true,
      edit: true,
      delete: true
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      Name: {
        title: 'Name',
        type: 'string',
      },
      Description: {
        title: 'Description',
        type: 'string',
      },
      Type: {
        title: 'Type',
        type: 'html',
        editor:{
          type: 'custom',
          component: CustomEditorTeamType,
        }
      },
   
    },
  };

  ngOnInit() {
    this.loading = true;
    this.teamService.getAll().subscribe((data) => {
      this.source = new LocalDataSource(data);
      this.loading = false;
    }, error => {
      this.loading = false;
      //...
    });
  }

  open() {
    this.dialogService.open(CreateTeamComponent)
      .onClose.subscribe((data) => {
        if (data) { this.source.prepend(data); }
      }
      );
  }

  showToast(status, message) {
    this.toastrService.success(status, message, { status, });
  }

  onDeleteConfirm(event): void {
    console.log(event);
    var dataToDelete = event.data;
    this.loading = true;
    if (window.confirm('Are you sure you want to delete?')) {
      this.teamService.destroy(event.data.Id).
        subscribe(data => this.showToast('Team Deleted successfully', 'Success'));
      this.loading = false;
      event.confirm.resolve();
    } else {
      this.loading = false;
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    this.loading = true;
    if (window.confirm('Are you sure you want to update?')) {
      this.teamService.update(event.newData).
        subscribe(data => this.showToast('Team updated successfully', 'Success'));
      this.loading = false;
      event.confirm.resolve();
    } else {
      this.loading = false;
      event.confirm.reject();
    }
  }

}
