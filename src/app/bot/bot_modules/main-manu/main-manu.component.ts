import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-manu',
  templateUrl: './main-manu.component.html',
  styleUrls: ['./main-manu.component.css']
})
export class MainManuComponent implements OnInit {
  
  @Output() payload=new EventEmitter()

  datas={
    buttons:[
      {
        title:"Folex",
        payload:"folex"
      },
      {
        title:"Lokeshon",
        payload:"lokeshon"
      },
      {
        title:"Kuery",
        payload:"kuery"
      },
      {
        title:"Braaanch",
        payload:"braaanch"
      },
      {
        title:"Feedbake",
        payload:"feedbake"
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
    this.cacheDOM()
    this.render()
  }

  cacheDOM(){
    
  }

  render(){

  }

  sendPayload(value){
    console.log("Payload value:",value)
    this.payload.emit(value)
  }

}
