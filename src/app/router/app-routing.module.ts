import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Guards
import { WardGuard } from '../guards/ward.guard';
import { LoginGuard } from '../guards/login.guard';

//Componentes
import { AppComponent } from '../components/appcomponent/app.component';
import { JSONpostsComponent } from '../components/jsonposts/jsonposts.component';
import { JSONcommentsComponent } from '../components/jsoncomments/jsoncomments.component';
import { JSONalbumsComponent } from '../components/jsonalbums/jsonalbums.component';
import { JSONphotosComponent } from '../components/jsonphotos/jsonphotos.component';
import { JSONtodosComponent } from '../components/jsontodos/jsontodos.component';
import { JSONusersComponent } from '../components/jsonusers/jsonusers.component';
import { LoginComponent } from '../components/login/login.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { JSONDetallePhotoComponent } from '../components/jsondetalle-photo/jsondetalle-photo.component';


const appRoutes: Routes = [
  { path: 'posts', component:  JSONpostsComponent, canActivate: [WardGuard]},
  { path: 'photo/:id', component: JSONDetallePhotoComponent, canActivate: [WardGuard]},
  // { path: 'comments', component: JSONcommentsComponent },
  { path: 'post/:id', component: JSONcommentsComponent, canActivate: [WardGuard] },
  { path: 'albums', component: JSONalbumsComponent, canActivate: [WardGuard] },
  { path: 'photos/:id', component: JSONphotosComponent, canActivate: [WardGuard]},
  { path: 'todos', component: JSONtodosComponent, canActivate: [WardGuard] },
  { path: 'users', component: JSONusersComponent, canActivate: [WardGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  { path: '', component: LoginComponent, canActivate: [WardGuard, LoginGuard]},
  { path: '**', component: LoginComponent, canActivate: [WardGuard, LoginGuard] },
];

export const Components = [
  AppComponent,
  JSONpostsComponent,
  JSONcommentsComponent,
  JSONalbumsComponent,
  JSONphotosComponent,
  JSONtodosComponent,
  JSONusersComponent,
  LoginComponent,
  NavbarComponent,
  FooterComponent,
  JSONDetallePhotoComponent
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes,{enableTracing: true,}),
  ],
  exports: [
    RouterModule,
  ],
  declarations: [
    
  ],
  providers: [
    
  ]
})
export class AppRoutingModule { }
