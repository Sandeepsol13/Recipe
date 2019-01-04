import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onnavclick = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  onSelect(event: string) {
    console.log(event);
    this.onnavclick.emit(event);
  }

}
