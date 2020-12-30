import { Component, OnInit } from '@angular/core';
import { storageService } from '../../services/storageService.js'
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor() { }

  loginText() {
    if(storageService.load('CURR_USER')) return 'Logout'
    return 'Login'
  }

  ngOnInit(): void {
  }

}
