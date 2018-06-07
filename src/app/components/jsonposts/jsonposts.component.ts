import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//Interfaces
import { Post } from '../../interfaces/interfaces';
//Servicios
import { PeticionesService } from '../../services/peticiones.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';


@Component({
  selector: 'app-jsonposts',
  templateUrl: './jsonposts.component.html',
  styleUrls: ['./jsonposts.component.css'],
  providers: [PeticionesService]
})
export class JSONpostsComponent implements OnInit {
  Posts: Array<Post> = new Array<Post>();
  componente:String;
  constructor(public peticionService: PeticionesService) {

   }

  async ngOnInit() {
    await this.peticionPost()
  }

  peticionPost(){
    this.componente = "posts?userId=" +Cookie.get('id');
    this.peticionService.getData(this.componente).subscribe(response => {
        console.log(response.json())
        this.Posts = response.json();
    });
  }

  eventoBorrar(id){
    this.componente = "posts/" +Cookie.get('id');
    this.peticionService.deleteElement(this.componente).subscribe(response => {
      console.log(response);
      
    });

    for (let index = 0; index < this.Posts.length; index++) {
      if(id == this.Posts[index].id){
        console.log("Entro al indice = " + index);
        this.Posts.splice(index,1);
      }
    }
  }

}
