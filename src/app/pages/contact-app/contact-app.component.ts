import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.scss']
})
export class ContactAppComponent implements OnInit {
  contacts: Contact[] = []
  selectedContactId: String = null
  contactToEditId: string = null;
  filterBy = null
  subscription: Subscription
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.subscription = this.contactService.contacts$.subscribe(contacts => {
      console.log('Got contacts!', contacts);
      this.contacts = [...contacts]
    })
    this.loadContacts()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
  get contactsJson() {
    return JSON.stringify(this.contacts, null, 2)
  }
  loadContacts() {
    this.contactService.query(this.filterBy)
  }
  removeContact(contactId) {
    this.contactService.remove(contactId)
  }
  onDoneEdit() {
    this.contactToEditId = null
    this.filterBy = null
    this.loadContacts()
  }
  setContactToEdit(contactId) {
    this.contactToEditId = contactId;
  }
  toAddContact() {
    console.log('check');
    this.contactToEditId = '12';
  }
  onSetFilter(filterBy = null) {
    console.log(filterBy);
    this.filterBy = filterBy
    this.loadContacts()
  }
  selectContact(selectedContactId) {
    console.log(selectedContactId);
    this.selectedContactId = selectedContactId
  }
  switchContact() {
    this.selectedContactId = null
    console.log(this.filterBy);
    this.filterBy = null
    this.loadContacts()
  }

}
