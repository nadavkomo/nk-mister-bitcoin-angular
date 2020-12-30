import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {User} from '../../models/user.model'
import { storageService } from '../../services/storageService.js'
import { UserService } from '../../services/userService'
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name: String = ''
  errMsg: String
  subscription: Subscription
  users: User[] = []
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    document.querySelector('.main').classList.add("full");
    this.subscription = this.userService.users$.subscribe(users => {
      console.log('Got users!', users);
      this.users = [...users]
    })
    this.userService.query()
    storageService.remove('CURR_USER')
  }

  ngOnDestroy() {
    document.querySelector('.main').classList.remove("full");
  }
  
  async onSignup(ev) {
    ev.preventDefault()
    if (this.name === '') {
      this.errMsg = 'username invalid'
      setTimeout(() => {
        this.errMsg = ''
      }, 2500)
      return
    }
    try {
      const user = await this.userService.signup(this.name, this.users)
      console.log(user);
      storageService.store('CURR_USER', user)
      this.router.navigateByUrl('/')
    } catch(err) {
      this.errMsg = 'username invalid'
      setTimeout(() => {
        this.errMsg = ''
      }, 2500)
    }
  }

  onLogin(ev) {
    ev.stopPropagation()
    console.log('check');
    if (this.name === '') {
      this.errMsg = 'username invalid'
      setTimeout(() => {
        this.errMsg = ''
      }, 2500)
      return
    }
    console.log(this.name);
    const res =  this.userService.login(this.name, this.users)
    console.log(res);
    if (!res) {
      this.errMsg = 'login failed'
      setTimeout(() => {
        this.errMsg = ''
        this.name = ''
      }, 2500)
      return
    }
    storageService.store('CURR_USER', res)
    this.router.navigateByUrl('/')
  }


}
