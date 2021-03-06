import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { pomodoroSettings } from '../../models/pomodoroSettings';
import { WorkType } from '../../models/workType';
import { TimersettingsService } from '../../services/timersettings.service';

@Component({
  selector: 'timer-card',
  templateUrl: './timer-card.component.html',
  styleUrls: ['./timer-card.component.css']
})
export class TimerCardComponent implements OnInit {
  public ListType = WorkType;
  currentWorkType: WorkType;
  currentTimerSettings: pomodoroSettings;
  subscription$: Subscription;

  constructor(private timerSettingsService : TimersettingsService) { }

  ngOnInit(): void {
    this.subscription$ = this.timerSettingsService.getCurrentPomodoroSettings().pipe(take(1)).subscribe(data => {
      this.currentTimerSettings = data;
    })
    this.currentWorkType = WorkType.Work;
  }

  changeWorkType(selectedWorkType: WorkType) {
    this.currentWorkType = selectedWorkType;
  }

}
