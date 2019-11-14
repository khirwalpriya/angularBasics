import { Component, OnInit, Input } from '@angular/core';
import { ISessions } from 'src/app/shared/event.model';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  @Input()
  sessions: ISessions;
  constructor() { }

  ngOnInit() {
  }

}
