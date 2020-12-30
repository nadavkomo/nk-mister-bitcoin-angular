import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { BehaviorSubject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { retry, catchError, map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) { }

  private BASE_URL = 'http://localhost:3000/contact'
  // private BASE_URL = process.env.NODE_ENV === 'production' ?
  //   '/contact/' :
  //   '//localhost:3000/contact/'


  private _contacts$ = new BehaviorSubject<Contact[]>([]);
  public contacts$ = this._contacts$.asObservable()
  public isUserAdmin() {
    return Promise.resolve(Math.random() > 0.5)
  }
  public query(filterBy = { term: '' }) {
    console.log(filterBy);
    
    this.http.get<Contact[]>(this.BASE_URL)
      .pipe(
        map(contacts => {
          return this._filter(contacts, filterBy ? filterBy.term : '')
        })
      ).subscribe(contacts => {
        console.log('load contacts', contacts);
        this._contacts$.next(contacts);
      })
  }

  public remove(contactId) {
    const removedContact$ = this.http.delete(this.BASE_URL + `/${contactId}`)
    removedContact$.subscribe(data => {
      const contacts = this._contacts$.getValue().filter(contact => contact._id !== contactId)
      this._contacts$.next(contacts)
      // Does the same thing ~
      // const contacts = this._contacts$.getValue().filter(contact => contact.id !== contactId)
      // this._contacts$.next(contacts);
    })
    return removedContact$
  }
  getEmptyContact() {
    return { name: '', email: '', coins: 100, phone: '' }
  }
  public getById(id) {
    return this.http.get<Contact>(this.BASE_URL + `/${id}`)
      .pipe(
        retry(1),
        catchError(() => throwError('no contact found!'))
      );
    //   const contact = this._contacts.find(contact => contact.id === id)
    // return contact ? of(contact) : throwError('no contact found')
  }
  public save(contact) {
    return contact._id ? this._edit(contact) : this._add(contact)
  }
  private _add(contact) {
    const contact$ = this.http.post<Contact>(this.BASE_URL, contact)
    contact$.subscribe(contact => {
      const contacts = [...this._contacts$.getValue(), contact]
      this._contacts$.next(contacts)
    })
    return contact$
  }
  private _edit(contact) {
    console.log(contact);
    const contact$ = this.http.put<Contact>(this.BASE_URL + `/${contact._id}`, contact)
    contact$.subscribe(contact => {
      const contacts = [...this._contacts$.getValue(), contact]
      this._contacts$.next(contacts)
    })
    return contact$
  }
  shouldBuyContact(contact: Contact) {
    // TODO: UPDATE TO HttpClient
    return this.http.get<{ answer: string }>('https://yesno.wtf/api')
      .pipe(map(res => res.answer))
    // return res.data.answer
  }

  private _filter(contacts, term) {
    term = term.toLocaleLowerCase()
    console.log(term);
    return contacts.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(term) ||
        contact.phone.toLocaleLowerCase().includes(term) ||
        contact.email.toLocaleLowerCase().includes(term)
    })
  }
}
