import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Interfaces
import { Photo } from '../../interfaces/interfaces';

//Servicios
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-jsonphotos',
  templateUrl: './jsonphotos.component.html',
  styleUrls: ['./jsonphotos.component.css']
})
export class JSONphotosComponent implements OnInit {
  Photos: Array<Photo> = new Array<Photo>();
  
  idAlbum: String;
  constructor(public peticionService: PeticionesService, public routes:ActivatedRoute) { }

  ngOnInit() {
    this.routes.params.subscribe(params => {
      this.idAlbum = params.id;
    });
    this.peticionPhotos();
  }

  peticionPhotos(){
    let componente:String = "photos?albumId=" + this.idAlbum;
    this.peticionService.getData(componente).subscribe(response => {
        console.log(response.json())
        this.Photos = response.json();
    });
  }
}
