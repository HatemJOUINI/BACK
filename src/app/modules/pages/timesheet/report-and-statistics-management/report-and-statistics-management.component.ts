import { Component, OnInit } from '@angular/core';
import { NbAccessChecker } from '@nebular/security';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { CustomerService } from 'src/app/core/services/customer.service';
import { Customer } from 'src/app/core/models/customer.model';
import { ContractService, Contract, TimesheetService } from 'src/app/core';
import { MonthlyTsByContract } from 'src/app/core/models/monthlyTsByContract.model';
///////////////////// generate pdf ///////////////////////
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
//////////////////////////////////////////////////////////
@Component({
  selector: 'app-report-and-statistics-management',
  templateUrl: './report-and-statistics-management.component.html',
  styleUrls: ['./report-and-statistics-management.component.css']
})
export class ReportAndStatisticsManagementComponent implements OnInit {
  user: UserPayload;
  contractSelectHasError=true;
  affected = false;

  customers: Customer[] = [];
  contracts: Contract[] = [];
  showTable: boolean;
  idcontract;
  // contractName;
  // customerName;
  contractId;
  customerId;
  ContractId;
  month;
  year;

  dateSys: Date;
  dateSysFormatted;

  monthlyTsByContratList: MonthlyTsByContract[] = [];

  constructor(
    public accessChecker: NbAccessChecker,
    private authService: NbAuthService,
    private customerService: CustomerService,
    private contractService: ContractService,
    private timesheetService: TimesheetService,
  ) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload
          // from the token and assigne it to our `user` variable
          // this.token = token;
        }
      });
  }

  ngOnInit() {
    this.dateSys = new Date();
   // if (this.user.rol != 'User') {
     { this.customerService.getAll().subscribe(data => this.customers = data);
    }
    this.showTable = true;
  }

//  reloadContracts() {
 //   this.contractService.getContractsByCustomerId(this.customerId)
 //     .subscribe(data => this.contracts = data);
 // }

  reloadContracts() {
    this.contractService.getAll().subscribe(data => this.contracts = data);
  }

  generate() {
    this.dateSysFormatted = this.dateSys.toISOString().slice(0, 10);

    this.monthlyTsByContratList = [];

    this.timesheetService.getAllTimesheetsByContractMonthYear2((this.contractId).toString(), this.month, this.year)
      .subscribe(data => {
        this.monthlyTsByContratList = data;
      });
    this.showTable = true;
  }



 // contractValidateSelect(value) {
 //   if (value==="default") {
 //     this.contractSelectHasError = true;
 //   } else {
 //     this.contractSelectHasError = false;
 //   }
 // }

  generatePDFDoc() {
   /* var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {

      // Few necessary setting options  
      var imgWidth = 250;
      var pageHeight = 300;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/JPEG')
      //let pdf = new jspdf('l', 'in', 'a4'); // A4 size page of PDF  
      let pdf = new jspdf('p','px','a4');
      let position = 1;
      pdf.internal.scaleFactor = 30;
      pdf.addImage(contentDataURL, 'JPEG', 0, position, imgWidth, imgHeight)
      pdf.save('Rapport.pdf'); // Generated PDF   
    });
  }*/

  /*
  generatePDFDoc() {
    const div = document.getElementById("contentToConvert");
    const options = { background: "white", height: div.clientHeight, width: div.clientWidth };

    html2canvas(div, options).then((canvas) => {
      //Initialize JSPDF
      let doc = new jspdf("p", "mm", "a4");
      //Converting canvas to Image
      let imgData = canvas.toDataURL("image/PNG");
      //Add image Canvas to PDF
      doc.addImage(imgData, 'PNG', 5, 5);

      let pdfOutput = doc.output();
      // using ArrayBuffer will allow you to put image inside PDF
      let buffer = new ArrayBuffer(pdfOutput.length);
      let array = new Uint8Array(buffer);
      for (let i = 0; i < pdfOutput.length; i++) {
        array[i] = pdfOutput.charCodeAt(i);
      }

      //Name of pdf
      const fileName = "example.pdf";

      // Make file
      doc.save(fileName);

    });
  }
*/
  }
  
  generateExcelDoc() {
  }

}
