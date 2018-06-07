import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {
  title = 'app';
  cookie:String = Cookie.get('logear');
  logear:boolean;

  constructor(){}

  ngOnInit(){
    if(this.cookie == "true"){
      this.logear = true;
    }
    else{
      this.logear = false;
    }
  }
}

