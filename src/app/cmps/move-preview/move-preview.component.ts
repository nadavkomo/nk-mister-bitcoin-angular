import { Component, OnInit, Input } from '@angular/core';
import { bitcoinService } from '../../services/bitcoinService.js'
@Component({
  selector: 'move-preview',
  templateUrl: './move-preview.component.html',
  styleUrls: ['./move-preview.component.scss']
})
export class MovePreviewComponent implements OnInit {
  @Input() move
  btnValue1
  USDValue 
  constructor() { }
  async convertUsd() {
    const value = await bitcoinService.getUsdValue(this.move.amount)
    this.USDValue = value 
    // const value = await this.getBtnValueFor1()
    // console.log(value)
    // this.USDValue = (this.move.amount * (1 / value)).toFixed(2).toLocaleString()
    // return (this.move.amount * (1 / value)).toFixed(2).toLocaleString()
  }
  timeToShow() {
    return new Date(this.move.at).toLocaleString()
  }

  
  ngOnInit(): void {
    // this.getBtnValueFor1()
    this.convertUsd()
  }

  async getBtnValueFor1(){
    const value = await bitcoinService.getRate(1)
    // this.btnValue1 = value
    return value 
  }


}
