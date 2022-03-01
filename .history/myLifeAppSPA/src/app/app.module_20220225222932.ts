import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PomodoroModule } from 'src/modules/pomodoro/pomodoro.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PomodoroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
