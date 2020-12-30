import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/userService'
import { storageService } from '../../services/storageService.js'
import { bitcoinService } from '../../services/bitcoinService.js'

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact = null
  errMsg: String = ''
  btnValue
  USDValue
  constructor(private route: ActivatedRoute, private userService: UserService, private contactService: ContactService) { }
  
  async convertUsd() {
    const value = await bitcoinService.getUsdValue(this.contact.coins)
    this.USDValue = value     
  }
  ngOnInit(): void {
    console.log(this.route);
    this.route.data.subscribe(data => {
      this.contact = data.contact
    })
    this.getBtnValue()
    this.convertUsd()

  }


  async onAddMove(amount) {
    const currUser = storageService.load('CURR_USER')
    console.log(currUser);
    console.log(amount);

    if (!currUser) {
      this.errMsg = 'Login first!'
      setTimeout(() => {
        this.errMsg = ''
      }, 3000)
      return
    }
    if (currUser.coins < amount) {
      this.errMsg = 'You do not have enough coins'
      setTimeout(() => {
        this.errMsg = ''
      }, 3000)
      return
    }
    if (!amount ||amount <= 0) {
      this.errMsg = 'invalid transfer amount'
      setTimeout(() => {
        this.errMsg = ''
      }, 3000)
      return
    }
    console.log('currUser', currUser);

    const updatedUser = await this.userService.addMove(this.contact, amount, currUser)
    var updateContact = {...this.contact}
    updateContact.coins = updateContact.coins ? updateContact.coins + amount : amount
    await this.contactService.save(updateContact)
    storageService.store('CURR_USER', { ...updatedUser })
    this.contact = {...updateContact}
    console.log(updatedUser);
  }

  currMoves() {
    const currUser = storageService.load('CURR_USER')
    var currMoves = []
    if (!currUser || !currUser.moves || currUser.moves.length === 0) return []
    currUser.moves.forEach(move => {
      if (move.to === this.contact.name) {
        currMoves.push(move)
      }
    })
    return currMoves
  }

  async getBtnValue() {
    const value = await bitcoinService.getRate(1)
    this.btnValue = value
  }
  

}
