import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {
  filterBy = {term: ''}
  @Output() emitOnSetFilter = new EventEmitter()
  
  constructor() { }
  
  setFilter(ev) {
    ev.preventDefault();
    console.log(this.filterBy);
    this.emitOnSetFilter.emit(this.filterBy)
  }
  
  
  ngOnInit(): void {
  }

}
