import { Component, OnDestroy, OnInit } from '@angular/core';
import { pomodoroSettings } from '../../models/pomodoroSettings';
import { WorkType } from '../../models/workType';
import { TimersettingsService } from '../../services/timersettings.service';

@Component({
  selector: 'timer-card',
  templateUrl: './timer-card.component.html',
  styleUrls: ['./timer-card.component.css']
})
export class TimerCardComponent implements OnInit, OnDestroy {
  public ListType = WorkType;
  currentWorkType: WorkType;
  currentTimerSettings: pomodoroSettings;
  subscription$ : any;
  constructor(private timerSettingsService : TimersettingsService) { }

  ngOnInit(): void {
    this.subscription$ =  this.timerSettingsService.getCurrentPomodoroSettings().subscribe(data => {
      this.currentTimerSettings = data;
    })
    this.currentWorkType = WorkType.Work;
  }

  changeWorkType(selectedWorkType : WorkType) {
    this.currentWorkType = selectedWorkType;
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
