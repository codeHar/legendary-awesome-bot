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
import { LokeshonComponent } from './bot/bot_modules/lokeshon/lokeshon.component'

@NgModule({
  declarations: [
    AppComponent,
    BotComponent,
    BotUiComponent,
    MainManuComponent,
    FolexComponent,
    LokeshonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
