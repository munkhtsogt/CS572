import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DbService } from './db.service';

@Injectable()
export class MyGuard implements CanActivate {

  constructor(private dbService: DbService, private router: Router){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let url = state.url.split("/"); 
    let index = this.dbService.getData().findIndex(s => s._id == +url[url.length - 1]);
    if(index == -1) {
      this.router.navigate(['pageNotFound']);
      return false;
    }
    return true;
  }
}
