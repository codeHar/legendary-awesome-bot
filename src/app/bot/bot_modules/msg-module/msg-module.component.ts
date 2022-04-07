import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FeedbackComponent } from '../feedback/feedback.component';

@Component({
  selector: 'app-msg-module',
  templateUrl: './msg-module.component.html',
  styleUrls: ['./msg-module.component.css']
})
export class MsgModuleComponent implements OnInit,AfterViewInit {

  @ViewChild("msg") msg:ElementRef
  @ViewChild("div") div:ElementRef
  @Input() botMessageBar:HTMLDivElement
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log("Msg:",this.msg.nativeElement.textContent)
    console.log("damn",this.botMessageBar.firstElementChild.appendChild(this.msg.nativeElement))
    console.log("damn",this.botMessageBar.firstElementChild.appendChild(this.div.nativeElement))
  }

}
