import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './components/timer/timer.component';
import { TimerCardComponent } from './components/timer-card/timer-card.component';
import { TimerMenuComponent } from './components/timer-menu/timer-menu.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { TimerCountdownComponent } from './components/timer-countdown/timer-countdown.component';
@NgModule({
  declarations: [
    TimerComponent,
    TimerCardComponent,
    TimerMenuComponent,
    TimerCountdownComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class PomodoroModule { }
