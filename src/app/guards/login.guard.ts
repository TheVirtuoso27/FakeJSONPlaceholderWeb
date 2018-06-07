import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): Observable<boolean> | boolean {
		return this.checkLogin();
	}

  checkLogin(): boolean {
		if (Cookie.get('logear') == 'true'){
			this.router.navigateByUrl('/albums')
			return false;
		}
		else
			return true;
	}
}
