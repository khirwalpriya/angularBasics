import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any;
  @Output() eventClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  handleClick() : void 
  {
    this.eventClick.emit(this.event.name);
  }

}
