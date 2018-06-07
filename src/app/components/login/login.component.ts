import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ActivatedRoute } from '@angular/router';

//Interfaces
import { User } from '../../interfaces/interfaces';

//Servicios
import { PeticionesService } from '../../services/peticiones.service';

const componente:String = "users";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logear:String;
  parametros = {
    username:'',
  };
  Users: Array<User> = new Array<User>();
  constructor(public peticionService: PeticionesService, public router: ActivatedRoute) { }

  async ngOnInit() {
    await this.peticionUser();
  }

  eventoLogear(){
    console.log("Entro al evento");
    console.log(this.parametros.username)
    for (let index = 0; index < this.Users.length; index++) {
      if(this.Users[index].username == this.parametros.username){
        Cookie.set('logear','true', null ,'/');
        Cookie.set('id',this.Users[index].id.toString(),null ,'/');
        console.log("Se encontro");
        location.reload(true);
      }
    }
    if(Cookie.get('logear') != "true"){
      alert("Error, Credenciales erroneas, Ingrese datos Correctos");
    }
  }

  peticionUser(){
    this.peticionService.getData(componente).subscribe(response => {
        console.log(response.json())
        this.Users = response.json();
    });
  }
}
