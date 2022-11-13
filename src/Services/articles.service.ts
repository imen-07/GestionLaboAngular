import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL1 } from 'src/app/app_config';
import { articles } from 'src/Models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  public tab:articles[]=GLOBAL1._DB1.articles;
  constructor(private httpClient:HttpClient) { }

  saveArticle(article:any):Promise<articles>
  {
   // this.httpClient.post<Member>
   // ('linktoRestAPI',member).toPromise()
   //ajouter manuellement dans la base puisque j'avais pas de back
   //si j'avais la partie back ne7i comment w nraja7a return this.httpClient w n5ali f linktorestapi fi 3aw4ha adresse mta3 l back
   const articleNew ={...article,
    Id:article.Id??Math.ceil(Math.random()*10000).toString(),
    Date:article.Date??new Date().toISOString(),
    };
    this.tab=[articleNew,...this.tab.filter(item=>item.Id!=articleNew.Id)]
    return (new Promise (resolve=>resolve(articleNew)))
  }

  getArticleById(currentID:string):Promise<articles>
{
 // return this.httpClient.get<Member>('lien').toPromise();// lien partie back
  return new Promise(resolve=>resolve(this.tab.filter(item=> item.Id===currentID) [0] ??null))// resolve cad executer si on est dans le bloc try
                                                                                //5alih fel pos 0 w ?? sinon                            
}
deleteArticleById(ID:string):Promise<void>{
  //return this.httpClient.delete<void>('Link').toPromise();//si j'ai le back
  this.tab=this.tab.filter(item=> item.Id!=ID);
  return new Promise(resolve=>resolve());
}

getAllArticles():Promise<articles []>{
  return new Promise (resolve=> resolve(this.tab));
}

AffectService(id_Article:string,selected:string):Promise<void>{
  this.getArticleById(id_Article).then((article)=>{article.auteur=selected});
  return new Promise(resolve=>resolve());

}

}



