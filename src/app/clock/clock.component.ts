import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
hour:number;
minutes:number;
seconds:number;
@Input("countdown") timeoflaunch:string;

  constructor() {
    setInterval(()=>{
      var dateSecond=new Date(this.timeoflaunch);
      var now=new Date();
      var timeDiff = Math.abs(dateSecond.getTime() - now.getTime());
      var days=Math.floor(timeDiff/(24*3600));
      var rem=timeDiff%(24*3600);
      var hr=Math.floor(rem/3600);
      var min=Math.floor((rem%3600)/60);
      var sec=(rem%3600)%60;
this.hour=hr;
this.seconds=sec;
this.minutes=min;
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
