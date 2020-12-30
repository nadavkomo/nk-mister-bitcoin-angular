import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { storageService } from '../services/storageService.js'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  async canActivate(): Promise<boolean> {
    var status = true
    if (!storageService.load('CURR_USER')) {
      this.router.navigateByUrl('/login')
    }
    console.log(storageService.load('CURR_USER'));
    return Promise.resolve(status)
  }

}
