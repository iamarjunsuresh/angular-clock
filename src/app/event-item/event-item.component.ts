import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
name:string;
  constructor() {
this.name="Title long title"

   }

  ngOnInit() {
  }

}
