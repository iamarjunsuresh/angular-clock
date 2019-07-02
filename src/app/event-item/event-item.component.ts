import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
title:string;
timeoflaunch:string
  constructor() {
this.title="Title long title"

this.timeoflaunch="11/12/2019 6:40 pm"
   }

  ngOnInit() {
  }

}
