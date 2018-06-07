import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable({
  providedIn: 'root'
})

export class WardGuard implements CanActivate {

  constructor(private router: Router) {}
  
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }
  
  canActivate(): Observable<boolean> | boolean {
		return this.checkLogin();
	}

  checkLogin(): boolean {
		if(Cookie.get('logear') == 'true'){
      return true;
    }
		else{
      this.router.navigateByUrl('/login')
		  return false;
    }
  }
}
