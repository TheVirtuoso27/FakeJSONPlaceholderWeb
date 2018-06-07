import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//Interfaces
import { User } from '../../interfaces/interfaces';
//Servicios
import { PeticionesService } from '../../services/peticiones.service';

const componente:String = "users";

@Component({
  selector: 'app-jsonusers',
  templateUrl: './jsonusers.component.html',
  styleUrls: ['./jsonusers.component.css']
})
export class JSONusersComponent implements OnInit {
  Users: Array<User> = new Array<User>();
  constructor(public peticionService: PeticionesService) {

   }

  ngOnInit() {
    this.peticionUser()
  }

  peticionUser(){
    this.peticionService.getData(componente).subscribe(response => {
        console.log(response.json())
        this.Users = response.json();
    });
  }
}
