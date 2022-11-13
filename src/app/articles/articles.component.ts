import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { articles } from 'src/Models/Article';
import { ArticlesService } from 'src/Services/articles.service';
import { AddArticleDialogComponent } from '../add-article-dialog/add-article-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  
  dataSource : MatTableDataSource<articles>
  displayedColumns: string[] = ['ID', 'TYPE', 'TITRE' , 'LIEN' , 'DATE' , 'SOURCEPDF' , 'AUTEUR' , 'UR' ];
  
  constructor(private articlesService:ArticlesService , private router:Router , private dialog:MatDialog) { 
    this.dataSource = new MatTableDataSource(this.articlesService.tab);
  }

  ngOnInit(): void {
  }

  AddArticle():void{
    //1 ouvrir la boite de dialog
    const dialogRef = this.dialog.open(AddArticleDialogComponent, {   });
    //2 attendre le retour du user 
    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      this.fetch();
  });
  }
  


  OnRemove(ID:string):void {
    //1 ouvrir la boite de dialog
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {   });
    //2 attendre le retour du user 
    dialogRef.afterClosed().subscribe(result => {
        if (result)  
            this.articlesService.deleteArticleById(ID).then(()=>{this.fetch();})
  });
  }

 

  fetch ():void{
    this.articlesService.getAllArticles().then((tableau)=>{this.dataSource.data=tableau;})
  }

}
