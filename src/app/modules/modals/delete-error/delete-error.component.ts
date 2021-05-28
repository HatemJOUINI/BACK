import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-delete-error',
  templateUrl: './delete-error.component.html',
  styleUrls: ['./delete-error.component.css']
})
export class DeleteErrorComponent implements OnInit {

  constructor(protected ref: NbDialogRef<DeleteErrorComponent>) { }

  ngOnInit() {
  }
  dismiss() {
    this.ref.close();
  }

}
