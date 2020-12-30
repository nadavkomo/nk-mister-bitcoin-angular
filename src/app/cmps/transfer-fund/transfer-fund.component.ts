import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  @Input() contact: Contact
  @Output() onAddMove = new EventEmitter()
  amount: Number

  constructor() { }

  ngOnInit(): void {
  }

  addMove(ev){
    ev.preventDefault()
    this.onAddMove.emit(this.amount)
    this.amount = null
  }

}
