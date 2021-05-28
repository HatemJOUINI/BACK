import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/core/models/employee.model';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Pointing } from 'src/app/core/models/pointing.model';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-pointing-chart',
  templateUrl: './pointing-chart.component.html',
  styleUrls: ['./pointing-chart.component.css']
})
export class PointingChartComponent implements OnInit {
employee:Employee;
employees;
pointing:Pointing;
pointings:Pointing[];
month;
year;
source;
weekday =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  constructor(private employeeService:EmployeeService) { }
  settings={
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
      day: {
        title: 'Day',
        type: 'string',
      },
    },
  };

  ngOnInit() {
    this.employeeService.getAll().subscribe((data) => { //get list of all users for combo box
      this.employees = data;
      this.employees.sort((a,b)=>{
        var textA = a.firstName.toUpperCase();
        var textB = b.firstName.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    }); 
    
  }
  
  generate(){
    //console.log(this.getDaysInMonth(this.year,this.month));
    //console.log(this.getDay(this.year,this.month,1))
    let daysNumber=this.getDaysInMonth(this.year,this.month);
    //let date1=new Date(this.year,this.month-1,2);
    
    for(let i=1;i<daysNumber+1;i++)
    {
      //console.log(this.weekday[this.getDayIndex(this.year,this.month-1,i)]);
      //console.log(this.getDayIndex(this.year,this.month-1,i));
      this.pointings[i-1].day=this.weekday[this.getDayIndex(this.year,this.month-1,i)];
    }
    // console.log(this.pointings)
    // this.source = new LocalDataSource(this.pointings);

  }
  getDayIndex(y,m,d){
    return new Date(y, m, d).getDay();
  }
  getDaysInMonth(y,m){
    return new Date(y, m, 0).getDate();
  }
}
