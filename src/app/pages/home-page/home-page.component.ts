import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { storageService } from '../../services/storageService.js'
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  currUser : User
  constructor( private router: Router) { }

  ngOnInit() {
    if (storageService.load('CURR_USER')) {
      this.currUser = storageService.load('CURR_USER')
    } 
    document.querySelector('.main').classList.add("full");
  }
  
  ngOnDestroy() {
    document.querySelector('.main').classList.remove("full");
  }

}
