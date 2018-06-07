import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, Components } from './router/app-routing.module';

//Servicios
import { PeticionesService } from './services/peticiones.service';

@NgModule({
  declarations: 
    Components
  ,
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
  ],
  providers: [
    PeticionesService,
  ],
  bootstrap: [Components[0]]
})
export class AppModule { }