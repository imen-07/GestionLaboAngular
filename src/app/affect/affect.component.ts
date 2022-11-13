import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/Models/Member';
import { ArticlesService } from 'src/Services/articles.service';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-affect',
  templateUrl: './affect.component.html',
  styleUrls: ['./affect.component.css']
})
export class AffectComponent implements OnInit {
  
  tab:Member[];
  selected: string="";
  id_Article: string="";



  constructor(private memberService:MemberService, private articleService:ArticlesService ,  private router:Router, private activatedRoute:ActivatedRoute) {
    this.tab=this.memberService.tab;
   }

   Affect(select:string):void{
    this.id_Article=this.activatedRoute.snapshot.params.Id;
    this.articleService.AffectService(this.id_Article,select).then(()=>{this.router.navigate(['/articles'])});

   }

  ngOnInit(): void {
  }

}
