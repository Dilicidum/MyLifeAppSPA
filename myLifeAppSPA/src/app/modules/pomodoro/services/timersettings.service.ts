import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { pomodoroSettings } from '../models/pomodoroSettings';

@Injectable({
  providedIn: 'root'
})
export class TimersettingsService {

  constructor() { }

  getCurrentPomodoroSettings(): Observable<pomodoroSettings> {

    let pomodoroSettings: pomodoroSettings = {
      Id: 2,
      WorkLength: new Date(),
      ShortBreakLength: new Date(),
      LongBreakLength: new Date(),
      CreatedAt: new Date(),
      isCurrent: true,
      Name: 'casual Pomodoro'
    };
    pomodoroSettings.WorkLength.setHours(0);
    pomodoroSettings.WorkLength.setMinutes(25);
    pomodoroSettings.WorkLength.setSeconds(0);
    pomodoroSettings.ShortBreakLength.setMinutes(0);
    pomodoroSettings.ShortBreakLength.setSeconds(10);
    pomodoroSettings.ShortBreakLength.setHours(0);
    pomodoroSettings.LongBreakLength.setMinutes(15);
    pomodoroSettings.LongBreakLength.setSeconds(0);
    pomodoroSettings.LongBreakLength.setHours(0);
    return of(pomodoroSettings);
  }
}
