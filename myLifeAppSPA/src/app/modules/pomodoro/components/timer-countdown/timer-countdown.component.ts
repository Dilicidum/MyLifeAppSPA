import { Time } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AttachSession } from 'protractor/built/driverProviders';
import { BehaviorSubject, interval, Observable, ReplaySubject, Subscription, timer } from 'rxjs';
import { map, min, take, takeUntil, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'timer-countdown',
  templateUrl: './timer-countdown.component.html',
  styleUrls: ['./timer-countdown.component.css']
})
export class TimerCountdownComponent implements OnInit, OnDestroy {

  @Input() timeLength: Date;
  timeLength$ = new BehaviorSubject<Date>(new Date());
  timeLeft$ = new BehaviorSubject<Date>(new Date());
  isStopped$ = new BehaviorSubject(true);
  timer$: Observable<any>;
  timerSubscription$: Subscription;

  get minutes() {
    return this.timeLeft$.value.getMinutes();
  }

  get seconds()  {
    let result = this.timeLeft$.value.getSeconds();
    if (result < 10) {
      return '0' + result;
    }
    else {
      return result;
    }
  }

  ChangeTimerStatus(isStopped: boolean) {
    this.isStopped$.next(isStopped);
    if (isStopped == false) {
      this.timerSubscription$ = this.timer$.subscribe(data => {
      }, err => {
        console.log('Error = ',err)
      }, () => {
        this.isStopped$.next(true);
      })
    } else {
      this.timerSubscription$.unsubscribe();
      this.InitTimer();
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.timeLeft$.next(this.timeLength);
    this.timeLength$.next(this.timeLength);
    this.InitTimer();
  }

  private InitTimer() {
    this.timer$ = timer(1000, 1000).pipe(
      map(i => {
        this.timeLeft$.next(this.DecreaseForSecond(this.timeLeft$.value));
        let res = this.timeLeft$.value.getSeconds();
        return res;
      }),
      takeWhile(a => this.isStopped$.value != true || a == 0),
      take(this.getTimeInSeconds(this.timeLeft$.value))
    );
  }

  private getTimeInSeconds(date: Date): number {
    let res = date.getSeconds() + date.getMinutes() * 60;
    return res;
  }

  private DecreaseForSecond(date : Date) : Date {
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    seconds = seconds - 1;
    date.setMinutes(minutes);
    date.setSeconds(seconds);
    return date;
  }

  ngOnDestroy(): void {
    if (this.timerSubscription$) {
      this.timerSubscription$.unsubscribe();
    }

  }
}
