import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2019',
    time: '10:00 AM',
    price: 599.99,
    imageUrl: '/assets/images/img1.png',
    location: {
      address: '1057 main',
      city: 'Bangalore',
      country: 'India'
    }
  
  }
  handleClickEvent(data)
  {
    console.log(data);
  }
}
