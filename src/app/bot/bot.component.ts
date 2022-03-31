import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {

  showBot=false
  showBotIcon=true
  constructor() { }

  ngOnInit(): void {
  }

  showBotMan(){
    this.showBot=true
    this.showBotIcon=false
  }

  hideBotMan(value){
    this.showBot=value
    this.showBotIcon=true
  }

}
