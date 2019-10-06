import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent implements OnInit {

  constructor( private route : Router) { }
  isDirty : boolean = true;
  ngOnInit() {
  }
  cancel()
  {
    this.route.navigate(['/events']);
  }
}
