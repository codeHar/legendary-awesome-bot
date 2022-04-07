import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bot-ui',
  templateUrl: './bot-ui.component.html',
  styleUrls: ['./bot-ui.component.css']
})
export class BotUiComponent implements OnInit ,AfterViewInit{

  // @ViewChild("botMessageBar") botMessageBar:ElementRef
  messageList=[]
  @Input()
  showBot=false
  // currentModule="normalModule"
  currentModule="mainManu"

  @Output() hideBot=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
  }

  addMessage(message:HTMLInputElement){
    console.log(message.value)
    if(message.value==="manu plz"){
      this.currentModule="mainManu"
    }
    this.messageList.push(message.value)
    message.value=""
  }

  closeBut(mainBot:HTMLDivElement){
    this.hideBot.emit(false)
  }

  changeCurrentModule(payload){
    this.currentModule=payload
  }

}
