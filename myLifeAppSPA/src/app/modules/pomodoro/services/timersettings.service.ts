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

    pomodoroSettings.WorkLength.setMinutes(25);
    pomodoroSettings.ShortBreakLength.setMinutes(5);
    pomodoroSettings.LongBreakLength.setMinutes(15);
    return of(pomodoroSettings);
  }
}
