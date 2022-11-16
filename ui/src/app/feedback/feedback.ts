import { Component, Input, OnInit } from '@angular/core'
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'feed-back',
  templateUrl: './feedback.html',
  styleUrls: ['./feedback.css']
})
export class FeedbackComponent implements OnInit{
  public isVisible: boolean = false;
  id: any;
constructor(private service:SharedService) { }
@Input() feed:any;
fname:String;
lname:String;
country:String;
subject:String;

ngOnInit(): void {
  }

addFeedback() : void {
  if (this.isVisible) { 
    return;
  } 
  this.isVisible = true;
  setTimeout(()=> this.isVisible = false,2500)
  var val = {
    fname:this.fname,
    lname:this.lname,
    
    country:this.country,
    subject:this.subject,};
    this.service.addFeedback(val).subscribe(res=>{
    });
};
  }

