import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Interfaces
import { Comment } from '../../interfaces/interfaces';

//Servicios
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-jsoncomments',
  templateUrl: './jsoncomments.component.html',
  styleUrls: ['./jsoncomments.component.css']
})
export class JSONcommentsComponent implements OnInit {
  Comments: Array<Comment> = new Array<Comment>();
  idpost:String;
  id:number = 501;
  componente:String
  Comentario:Comment = {
    postId:0,
    id:this.id,
    name:'',
    email:'',
    body:''
  }
  constructor(public peticionService: PeticionesService, public routes:ActivatedRoute) { }

  ngOnInit() {
    this.routes.params.subscribe(params => {
      this.idpost = params.id;
    });
    this.peticionComment()
  }

  peticionComment(){
    this.componente = "posts/" + this.idpost + "/comments";
    console.log(this.componente)
    this.peticionService.getData(this.componente).subscribe(response => {
        console.log(response.json())
        this.Comments = response.json();
    });
  }

  addComment(){
    this.componente = "comments";
    console.log(this.componente)
    this.Comentario.postId = +this.idpost;
    if(this.Comentario.name.length != 0 && this.Comentario.body.length != 0 && this.Comentario.email.length != 0){
      this.peticionService.newElement(this.componente, this.Comentario).subscribe(response => {
        console.log(response);
        this.id++;
        this.Comments.push(this.Comentario);
      });
    }
    else{
      alert("Error, Ingrese datos Correctos");
    }
    
  }

}
