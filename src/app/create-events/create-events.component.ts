import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent implements OnInit {
  isDirty : boolean = true;
  newEvent;
  constructor( private route : Router, private eventservice: EventService) { }
  
  ngOnInit() {
  }
  saveEvent(formvalues)
  {
    console.log(formvalues);
    this.eventservice.addEvents(formvalues);
    this.isDirty=false;
    this.route.navigate(['/events']);
    
  }
  cancel()
  {
    this.route.navigate(['/events']);
  }
}
