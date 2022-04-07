import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotComponent } from './bot/bot.component';
import { BotUiComponent } from './bot/bot-ui/bot-ui.component';
import { FormsModule } from '@angular/forms';
import { MainManuComponent } from './bot/bot_modules/main-manu/main-manu.component';
import { FolexComponent } from './bot/bot_modules/folex/folex.component';
import {HttpClientModule} from "@angular/common/http";
import { LokeshonComponent } from './bot/bot_modules/lokeshon/lokeshon.component';
import { MobileMenuComponent } from './bot/bot_modules/mobile-menu/mobile-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FeedbackComponent } from './bot/bot_modules/feedback/feedback.component';
import {MatSelectModule} from '@angular/material/select';
import { ContentRenderComponent } from './bot/bot_modules/content-render/content-render.component';
import { MsgModuleComponent } from './bot/bot_modules/msg-module/msg-module.component';

@NgModule({
  declarations: [
    AppComponent,
    BotComponent,
    BotUiComponent,
    MainManuComponent,
    FolexComponent,
    LokeshonComponent,
    MobileMenuComponent,
    FeedbackComponent,
    ContentRenderComponent,
    MsgModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
