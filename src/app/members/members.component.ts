import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Member } from 'src/Models/Member';
import { MemberService } from 'src/Services/member.service';
import { GLOBAL1 } from '../app_config';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})

export class MembersComponent implements OnInit {

  dataSource : MatTableDataSource<Member>

  displayedColumns: string[] = ['ID', 'CIN', 'NAME' , 'CREATEDDATE' , 'CV' , 'TYPE' , 'UR'  ];

  constructor(private memberService:MemberService , private router:Router , private dialog:MatDialog) { 
    this.dataSource = new MatTableDataSource(this.memberService.tab);

  }
  
  ngOnInit(): void {
  }

  OnRemove(ID:string):void {
    //1 ouvrir la boite de dialog
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {   });
    //2 attendre le retour du user 
    dialogRef.afterClosed().subscribe(result => {
        if (result)  
            this.memberService.deleteMemberById(ID).then(()=>{this.fetch();})
  });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  fetch ():void{
    this.memberService.getAllMembers().then((tableau)=>{this.dataSource.data=tableau;})
  }

}
