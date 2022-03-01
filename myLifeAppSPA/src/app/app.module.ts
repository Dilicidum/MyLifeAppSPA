import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PomodoroModule } from 'src/app/modules/pomodoro/pomodoro.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { TimerComponent } from './modules/pomodoro/components/timer/timer.component';
//import { routes } from './modules/pomodoro/routes';

const routes: Routes = [
  {path : '',component:AppComponent},
  { path: 'timer', component: TimerComponent },
  { path: '**', redirectTo:''}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    PomodoroModule,
    RouterModule.forRoot(routes),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
