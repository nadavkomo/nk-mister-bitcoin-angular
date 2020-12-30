import { Component, OnInit, Input } from '@angular/core';
import { bitcoinService } from '../../services/bitcoinService.js'

@Component({
  selector: 'user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.scss']
})
export class UserPreviewComponent implements OnInit {
  btnValue = ''
  btnValue1 = ''
  @Input() user;

  constructor() { }

  ngOnInit(): void {
    this.getBtnValue(this.user.coins)
    this.getBtnValueFor1()
  }
  
  async getBtnValue(coins) {
    const value = await bitcoinService.getRate(coins)
    this.btnValue = value
  }
  lastMoves(){
    if (this.user.moves.length > 3) {
      return this.user.moves.slice(-3)
    }
    return this.user.moves
  }
  async getBtnValueFor1(){
    const value = await bitcoinService.getRate(1)
    this.btnValue1 = value 
    console.log(this.btnValue1);
  }


}
