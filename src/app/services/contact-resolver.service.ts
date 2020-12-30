import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class ContactResolverService implements Resolve<Observable<Contact>> {

  constructor(private contactService: ContactService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id')
    const contact$ = this.contactService.getById(id)
    contact$.subscribe(() => { }, (err) => {
      this.router.navigateByUrl('/')
    })
    return contact$
  }
}
