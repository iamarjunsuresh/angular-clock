import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'event',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
@Input("title") title:string;
@Input("ldate") timeoflaunch:string;

  constructor() {


   }

  ngOnInit() {
  }

}
