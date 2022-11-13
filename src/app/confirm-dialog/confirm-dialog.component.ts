import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  //@param {MatDialogRef<ConfirmDialogComponent>}

  public title ='Are you sure';
  public message ='Do you really want to remove?';
  public confirm ='comfirm';
  public cancel ='cancel';

  constructor() { }
  //ken 3andi fel constructeur public dialogRef: MatDialogRef<ConfirmDialogComponent>

  ngOnInit(): void {
  }

}
