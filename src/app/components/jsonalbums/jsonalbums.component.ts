import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Interfaces
import { Album, Photo } from '../../interfaces/interfaces';

//Servicios
import { PeticionesService } from '../../services/peticiones.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

//const componente:String = "albums";



@Component({
  selector: 'app-jsonalbums',
  templateUrl: './jsonalbums.component.html',
  styleUrls: ['./jsonalbums.component.css']
})
export class JSONalbumsComponent implements OnInit {
  Albums: Array<Album> = new Array<Album>();
  Photos: Array<Photo> = new Array<Photo>();
  constructor(public peticionService: PeticionesService) { }

  async ngOnInit() {
    await this.peticionAlbum();
  }

  peticionAlbum(){
    const componente:String = "albums?userId=" + Cookie.get('id');
    this.peticionService.getData(componente).subscribe(response => {
        console.log(response.json());
        this.Albums = response.json();
    });
  }

  peticionPhotos(id){
    const componente:String = "photos?albumId=" + id;
    this.peticionService.getData(componente).subscribe(response => {
      console.log(response.json());
      this.Photos = response.json();
    });
  }

}
