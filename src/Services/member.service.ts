import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL1 } from 'src/app/app_config';
import { Member } from 'src/Models/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  public tab:Member[]=GLOBAL1._DB1.members;
  constructor(private httpClient:HttpClient) { }
  saveMember(member:any):Promise<Member>
  {
   // this.httpClient.post<Member>
   // ('linktoRestAPI',member).toPromise()
   //ajouter manuellement dans la base puisque j'avais pas de back
   //si j'avais la partie back ne7i comment w nraja7a return this.httpClient w n5ali f linktorestapi fi 3aw4ha adresse mta3 l back
   const memberNew ={...member,
    id:member.id??Math.ceil(Math.random()*10000).toString(),
    createdDate:member.createdDate??new Date().toISOString(),
    };
    this.tab=[memberNew,...this.tab.filter(item=>item.id!=memberNew.id)]
    return (new Promise (resolve=>resolve(memberNew)))
  }
getMemberById(currentID:string):Promise<Member>
{
 // return this.httpClient.get<Member>('lien').toPromise();// lien partie back
  return new Promise(resolve=>resolve(this.tab.filter(item=> item.id===currentID) [0] ??null))// resolve cad executer si on est dans le bloc try
                                                                                //5alih fel pos 0 w ?? sinon                            
}
deleteMemberById(ID:string):Promise<void>{
  //return this.httpClient.delete<void>('Link').toPromise();//si j'ai le back
  this.tab=this.tab.filter(item=> item.id!=ID);
  return new Promise(resolve=>resolve());
}

getAllMembers():Promise<Member []>{
  return new Promise (resolve=> resolve(this.tab));
}}
