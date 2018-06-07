import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Interfaces
import { Todo } from '../../interfaces/interfaces';

//Servicios
import { PeticionesService } from '../../services/peticiones.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

//const componente:String = "todos";


@Component({
  selector: 'app-jsontodos',
  templateUrl: './jsontodos.component.html',
  styleUrls: ['./jsontodos.component.css']
})
export class JSONtodosComponent implements OnInit {
  // TodosN: Array<Todo> = new Array<Todo>();
  Todos: Array<Todo> = new Array<Todo>();
  Usuario:number = +Cookie.get('id');
  uri:String;

  constructor(public peticionService: PeticionesService) { }

  ngOnInit() {
    this.peticionTodos();    
  }

  // filtrarDatos(){
  //   let i = 0;
  //   for (let index = 0; index < this.TodosN.length; index++) {
  //     if(this.TodosN[index].userId == this.Usuario){
  //       this.Todos[i] = this.TodosN[index];
  //       i++;
  //     }
  //   }
  // }

  peticionTodos(){
    const componente:String = "todos?userId=" + Cookie.get('id');
    this.peticionService.getData(componente).subscribe(response => {
        console.log(response.json())
        this.Todos = response.json();  
        // this.TodosN = response.json();        
        // this.filtrarDatos();
      });
  }

  async deleteTodo(id){
    this.uri = "todos/" + id;
    await this.peticionService.deleteElement(this.uri).subscribe(response => {
      console.log(response);
    });

    for (let index = 0; index < this.Todos.length; index++) {
      if(id == this.Todos[index].id){
        console.log("Entro al indice = " + index);
        this.Todos.splice(index,1);
      }
    }
    
    
  }
}
