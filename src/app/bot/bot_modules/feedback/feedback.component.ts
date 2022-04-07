import { Component, OnInit } from '@angular/core';
import { BotService } from '../../bot.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private botService:BotService) { }

  ngOnInit(): void {
  }

  submitFeedback(feedback:HTMLTextAreaElement){
    this.botService.postFeedback(feedback.value)
    .subscribe(res=>{
      console.log("Response:",res)
    })
    feedback.value=""
    console.log("Feedback:",feedback.value)
  }

}
