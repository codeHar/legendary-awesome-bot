import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-content-render',
  templateUrl: './content-render.component.html',
  styleUrls: ['./content-render.component.css']
})
export class ContentRenderComponent implements OnInit {

  @Output() payload=new EventEmitter()
  @Input() currentModule="mainManu"

  constructor() { }

  ngOnInit(): void {
  }

  sendPayload(value){
    console.log("Payload value:",value)
    this.payload.emit(value)
  }



}
