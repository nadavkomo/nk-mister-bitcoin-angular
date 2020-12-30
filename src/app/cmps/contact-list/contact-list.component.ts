import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[];
  @Output() onSelectContact = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  selectContact(contactId) {
    console.log(contactId);
    this.onSelectContact.emit(contactId)
  }

}
