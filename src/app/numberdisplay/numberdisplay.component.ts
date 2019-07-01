import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'numberdisplay',
  templateUrl: './numberdisplay.component.html',
  styleUrls: ['./numberdisplay.component.css']
})
export class NumberdisplayComponent implements OnInit {

i:number;
@Input("txt") text:string;
  constructor() {
    this.i=0;
    //this.text="X";
    //setInterval(()=>{this.settext();},1000  );
   }
  settext()
  {
    this.i+=1;
this.text=this.i+"";
  }
  ngOnInit() {
  }

}
