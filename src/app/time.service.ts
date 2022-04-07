import { Injectable } from '@angular/core';
import { Temporal } from '@js-temporal/polyfill';
import { map, Observable, tap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  time:Observable<any>

  constructor() {
    let curSecond=Temporal.Now.plainTimeISO().second*1000
    let delayInSeconds=60000-curSecond

    this.time=timer(delayInSeconds,60000).pipe(map(n=>{
      console.log("Timer:",n)
      return Temporal.Now.plainTimeISO().toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'short' })
    }))
   }

   getTime(){
      return this.time
   }

   
}
