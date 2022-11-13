import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/Models/Member';
import { MemberService } from 'src/Services/member.service';
import { MembersComponent } from '../members/members.component';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
form:any;
itemGlobal:any;
currentID:any;
  constructor(private memberService : MemberService , private router:Router, private activatedRoute:ActivatedRoute) {

   }

  ngOnInit(): void {
    
    //1)récupérer l'id de l'element à partir de l'url
    this.currentID=this.activatedRoute.snapshot.params.id;
    console.log(this.currentID);
    //2)récupérer l'element à partir de son id
    if(!!this.currentID)
    {
      this.memberService.getMemberById(this.currentID).then
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
initForm1(itemGlobal : Member):void
{
  this.form = new FormGroup({
    cin : new FormControl(this.itemGlobal.cin ),
    name:new FormControl(this.itemGlobal.name ),
    cv :new FormControl(this.itemGlobal.cv ),
    type:new FormControl(this.itemGlobal.type ),
  });
}

initForm():void
{
  this.form = new FormGroup({
    cin : new FormControl(null , [Validators.required]),
    name:new FormControl(null , [Validators.required]),
    cv :new FormControl(null , [Validators.required]),
    type:new FormControl(null , [Validators.required]),
  });
}
ONSUB():void
{
  const ObjectToSubmit = {...this.itemGlobal,...this.form.value};
  //console.log(this.form.value)
  this.memberService.saveMember(ObjectToSubmit).then(()=>{this.router.navigate(['./members'])})
  //.then 5ater méthode saveMember de type promise traja3 thread dc n5ali fiha 3al lisar() chnou jeni w 3al limin{} chnou cbh na3mel biha
  //reception du contenu du thread 
  //action post reception du retour du thread
}
}