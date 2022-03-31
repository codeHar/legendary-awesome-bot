import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bot-ui',
  templateUrl: './bot-ui.component.html',
  styleUrls: ['./bot-ui.component.css']
})
export class BotUiComponent implements OnInit {

  messageList=[]
  @Input()
  showBot=false
  currentModule="normalModule"

  @Output() hideBot=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
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
