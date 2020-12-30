import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  contactToEdit: Contact;
  constructor(private router: Router, private _location: Location, private contactService: ContactService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.loadContact(id)
    })
  }

  backClicked() {
    this._location.back();
  }

  loadContact(id) {
    if (id) {
      const contact$ = this.contactService.getById(id)
      contact$.subscribe(contact => this.contactToEdit = contact)
    } else this.contactToEdit = this.contactService.getEmptyContact()
  }
  save() {
    this.contactService.save(this.contactToEdit)
    this.router.navigateByUrl('/contact')
  }
  remove(contactId) {
    this.contactService.remove(contactId)
    this.router.navigateByUrl('/contact')
  }
}
