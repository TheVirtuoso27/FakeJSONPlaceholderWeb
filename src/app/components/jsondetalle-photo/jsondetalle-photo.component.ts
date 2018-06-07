import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Interfaces
import { Photo } from '../../interfaces/interfaces';

//Servicios
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-jsondetalle-photo',
  templateUrl: './jsondetalle-photo.component.html',
  styleUrls: ['./jsondetalle-photo.component.css']
})
export class JSONDetallePhotoComponent implements OnInit {
  Foto: Photo = {
    albumId: 0,
    id: 0,
    title: '',
    url: '',
    thumbnailUrl: ''
  };
  idPhoto: String;
  constructor(public peticionService: PeticionesService, public routes:ActivatedRoute) { }

  ngOnInit() {
    this.routes.params.subscribe(params => {
      this.idPhoto = params.id;
    });
    this.pedirImagen();
  }

  pedirImagen(){
    let componente:String = "photos/" + this.idPhoto;
    this.peticionService.getData(componente).subscribe(response => {
        console.log(response.json());
        this.Foto = response.json();
    });
  }    
}
