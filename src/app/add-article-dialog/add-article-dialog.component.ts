import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { articles } from 'src/Models/Article';
import { ArticlesService } from 'src/Services/articles.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-add-article-dialog',
  templateUrl: './add-article-dialog.component.html',
  styleUrls: ['./add-article-dialog.component.css']
})
export class AddArticleDialogComponent implements OnInit {

  form:any;
  itemGlobal:any;
  currentID:any;


  constructor(private articlesService : ArticlesService , private router:Router, private activatedRoute:ActivatedRoute , private dialog:MatDialog ) { }
 // fel constructeur ken 3andi public dialogRef: MatDialogRef<AddArticleDialogComponent>

  ngOnInit(): void {
      
    //1)récupérer l'id de l'element à partir de l'url
    this.currentID=this.activatedRoute.snapshot.params.Id;
    console.log(this.currentID);
    //2)récupérer l'element à partir de son id
    if(!!this.currentID)
    {
      this.articlesService.getArticleById(this.currentID).then
      ((item)=>
      {this.itemGlobal=item;
      this.initForm1(this.itemGlobal);
      }
      )}
    else {this.initForm();
    //getMemberbyId()
    //3)si on n'a pas d'id =>appeler initForm()
    }
  }

initForm1(itemGlobal : articles):void
{
  this.form = new FormGroup({
    type      :new FormControl(this.itemGlobal.type ),
    Titre     :new FormControl(this.itemGlobal.Titre ),
    lien      :new FormControl(this.itemGlobal.lien ),
    SourcePDF :new FormControl(this.itemGlobal.SourcePDF ),
    //auteur    :new FormControl(this.itemGlobal.auteur ),
  });
}

initForm():void
{
  this.form = new FormGroup({
    type      :new FormControl(null , [Validators.required]),
    Titre     :new FormControl(null , [Validators.required]),
    lien      :new FormControl(null , [Validators.required]),
    SourcePDF :new FormControl(null , [Validators.required]),
    //auteur    :new FormControl(null , [Validators.required]),
  });
}

ONSUB():void
{
  const ObjectToSubmit = {...this.itemGlobal,...this.form.value};
  //console.log(this.form.value) 
  this.articlesService.saveArticle(ObjectToSubmit).then(()=>{this.router.navigate(['./articles'])})
}
  
  //.then 5ater méthode saveMember de type promise traja3 thread dc n5ali fiha 3al lisar() chnou jeni w 3al limin{} chnou cbh na3mel biha
  //reception du contenu du thread 
  //action post reception du retour du thread
}





  
   
