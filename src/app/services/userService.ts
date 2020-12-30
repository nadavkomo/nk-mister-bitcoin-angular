// import { storageService } from './storageService'

// export const UserService = {
//   query,
//   signup,
//   login,
//   addMove
// }

import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { retry, catchError, map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  private BASE_URL = 'http://localhost:3000/user'

  private _users$ = new BehaviorSubject<User[]>([]);
  public users$ = this._users$.asObservable()
  private _user$ = new BehaviorSubject(User);
  public user$ = this._user$.asObservable()

  public query() {
    this.http.get<User[]>(this.BASE_URL)
      .subscribe(users => {
        console.log('load users', users);
        this._users$.next(users);
      })
  }

  public login(name, users) {
    const user = users.find(user => user.name === name)    
    if (user) this._user$.next(user);
    return user
  }

  public signup(name, users) {
    const user = users.find(user => user.name === name)
    if (user) return Promise.reject()
    this._user$.next(user);
    this.add({ name, coins: 100, moves: [] })
    return Promise.resolve({ name, coins: 100, moves: [] })
  }

  public add(user) {
    console.log('user', user);
    const user$ = this.http.post<User>(this.BASE_URL, user)
    user$.subscribe(user => {
      console.log(user);
      const users = [...this._users$.getValue(), user]
      this._users$.next(users)
    })
    return user$
  }

  public addMove(contact, amount, currUser) {
    // const currUserIdx = this._users$.getValue().findIndex(user => user.name === currUser.name)
    // if (currUserIdx === -1) return
    // const updatedUser = JSON.parse(JSON.stringify(this._users$.getValue()[currUserIdx]))
    // console.log('updatedUser', updatedUser);
    // updatedUser.coins -= amount
    currUser.coins -= amount
    const move = {
      toId: contact._id,
      to: contact.name,
      at: Date.now(),
      amount
    }
    currUser.moves.push(move)
    this.edit(currUser)
    return currUser
  }

  public edit(user) {
    console.log(user);
    const user$ = this.http.put<User>(this.BASE_URL + `/${user._id}`, user)
    this._user$.next(user)
    user$.subscribe(user => {
      const users = [...this._users$.getValue(), user]
      this._users$.next(users)
    })
    return user$
  }

}


// const users = [
//   { name: "nadav", coins: 100, moves: [] }
// ]

// function query() {
//   return users
// }

// function login(name) {
//   const user = users.find(user => user.name === name)
//   return Promise.resolve(user)
// }

// function signup(name) {
//   const user = users.find(user => user.name === name)
//   if (user) return Promise.reject()
//   users.push({ name, coins: 100, moves: [] })
//   return Promise.resolve({ name, coins: 100, moves: [] })
// }

// function addMove(contact, amount, currUser) {
//   const currUserIdx = users.findIndex(user => user.name === currUser.name)
//   if (currUserIdx === -1) return
//   const updatedUser = JSON.parse(JSON.stringify(users[currUserIdx]))
//   updatedUser.coins -= amount
//   const move = {
//     toId: contact._id,
//     to: contact.name,
//     at: Date.now(),
//     amount
//   }
//   updatedUser.moves.push(move)
//   users.splice(currUserIdx, 1, updatedUser)
//   storageService.store('CURR_USER', updatedUser)
//   return updatedUser
// }


// import { Injectable } from '@angular/core';
// import { User } from '../models/user.model';
// import { BehaviorSubject, throwError } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

// import { retry, catchError, map, filter } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   constructor(private http: HttpClient) { }

//   private BASE_URL = 'http://localhost:3000/user'

//   private _users$ = new BehaviorSubject<User[]>([]);
//   public users$ = this._users$.asObservable()
//   // public isUserAdmin() {
//   //   return Promise.resolve(Math.random() > 0.5)
//   // }
//   // public query(filterBy = { term: '' }) {
//   //   console.log(filterBy);

//   //   this.http.get<User[]>(this.BASE_URL)
//   //     .pipe(
//   //       map(users => {
//   //         return this._filter(users, filterBy ? filterBy.term : '')
//   //       })
//   //     ).subscribe(users => {
//   //       console.log('load users', users);
//   //       this._users$.next(users);
//   //     })
//   // }

//   // public remove(contactId) {
//   //   const removedUser$ = this.http.delete(this.BASE_URL + `/${contactId}`)
//   //   removedUser$.subscribe(data => {
//   //     const contacts = this._users$.getValue().filter(contact => contact._id !== contactId)
//   //     this._users$.next(contacts)
//   //     // Does the same thing ~
//   //     // const contacts = this._users$.getValue().filter(contact => contact.id !== contactId)
//   //     // this._users$.next(contacts);
//   //   })
//   //   return removedUser$
//   // }
//   getEmptyUser() {
//     return { name: '', coins: 100, moves: [] }
//   }
//   // public getById(id) {
//   //   return this.http.get<User>(this.BASE_URL + `/${id}`)
//   //     .pipe(
//   //       retry(1),
//   //       catchError(() => throwError('no user found!'))
//   //     );
//   // //   const contact = this._users.find(contact => contact.id === id)
//   // // return contact ? of(contact) : throwError('no contact found')
//   // }
//   public login(name) {
//     console.log(this._users$);

//     const user$ = this.http.get<User[]>(this.BASE_URL)
//       .pipe(
//         map(users => {
//           return users.find(user => user.name === name)
//         }))
//     console.log(user$.subscribe());

//     user$.subscribe(user => {
//       console.log(user);
//     })
//     return user$
//   }


//   public signup(name) {
//     this.http.get<User[]>(this.BASE_URL)
//       .pipe(
//         map(users => {
//           return users.find(user => user.name === name)
//         })
//       ).subscribe(user => {
//         if (user) return ('username already exists')
//         return this._add(this.getEmptyUser().name = name)
//       })
//   }

//   // public save(contact) {
//   //   return contact._id ? this._edit(contact) : this._add(contact)
//   // }
//   private _add(user) {
//     const user$ = this.http.post<User>(this.BASE_URL, user)
//     user$.subscribe(user => {
//       const users = [...this._users$.getValue(), user]
//       this._users$.next(users)
//     })
//     return user$
//   }
//   // private _edit(contact) {
//   //   console.log(contact);
//   //   const contact$ = this.http.put<User>(this.BASE_URL + `/${contact._id}`, contact)
//   //   contact$.subscribe(contact => {
//   //     const contacts = [...this._users$.getValue(), contact]
//   //     this._users$.next(contacts)
//   //   })
//   //   return contact$
//   // }
//   // shouldBuyUser(contact: User) {
//   //   // TODO: UPDATE TO HttpClient
//   //   return this.http.get<{ answer: string }>('https://yesno.wtf/api')
//   //     .pipe(map(res => res.answer))
//   //   // return res.data.answer
//   // }

  // private _filter(contacts, term) {
  //   term = term.toLocaleLowerCase()
  //   console.log(term);
  //   return contacts.filter(contact => {
  //     return contact.name.toLocaleLowerCase().includes(term) ||
  //       contact.phone.toLocaleLowerCase().includes(term) ||
  //       contact.email.toLocaleLowerCase().includes(term)
  //   })
  // }
// }
