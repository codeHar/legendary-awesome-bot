import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Temporal, toTemporalInstant } from '@js-temporal/polyfill';
import { Subscription } from 'rxjs';
import { TimeService } from 'src/app/time.service';


@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent implements OnInit,OnDestroy {
  @Output() payload=new EventEmitter()
  time:string
  date:string
  timeSubscription:Subscription
  
  datas={
    buttons:[
      {
        title:"Kuery",
        payload:"kuery",
        img:"assets/images/chatbot.png"
      },
      {
        title:"Lokeshon",
        payload:"lokeshon",
        img:"assets/images/google-maps.png"
      },
      {
        title:"Folex",
        payload:"folex",
        img:"assets/images/forex.png"
      },    
      {
        title:"Braaanch",
        payload:"braaanch",
        img:"assets/images/branch.png"
      },
      {
        title:"Feedbake",
        payload:"feedbake",
        img:"assets/images/feedback.png"
      }
    ]
  }

  constructor(private timeService:TimeService) { }

  ngOnInit(): void {
    console.log("Inside onInit")
    this.time=Temporal.Now.plainTimeISO().toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'short' })
    this.date=Temporal.Now.plainDateISO().toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })
    this.timeSubscription= this.timeService.getTime()
    .subscribe(time=>{
      console.log("Time:",time)
      this.time=time
    })
  }

  sendPayload(value){
    console.log("Payload value:",value)
    this.payload.emit(value)
  }

  ngOnDestroy(): void {
    this.timeSubscription.unsubscribe()
  }


}
