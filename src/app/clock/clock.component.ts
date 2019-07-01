import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
hour:number;
minutes:number;
seconds:number;

  constructor() {
this.seconds=5;
this.hour=1;
this.minutes=1; 
    setInterval(()=>{

this.seconds-=1;
if(this.seconds==-1)
{
  this.seconds=59;
  this.minutes-=1;
}
if(this.minutes==-1)
{
  this.hour-=1;
  this.minutes=59;
}


    },1000)
   }

  ngOnInit() {
  }

}
