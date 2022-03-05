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
export class TimerCountdownComponent implements OnInit,OnDestroy {
  @Input() timeLength: Date;
  timeLength$ = new ReplaySubject<Date>();
  isStopped$ = new BehaviorSubject(true);
  currentTime: Date;
  passedTime: Date;
  interval$: Observable<any>;
  intervalSubscription$: Subscription;
  timer$: Observable<any>;
  timerSubscription$: Subscription;
  get minutes() {
    return this.timeLength.getMinutes();
  }

  get seconds() {
    let result = this.timeLength.getSeconds();
    if (result < 10) {
      return '0' + result;
    }
    else {
      return result;
    }
  }
  variable: any;

  ChangeTimerStatus(isStopped: boolean) {

    this.isStopped$.next(isStopped);
    if (isStopped == false) {
      this.intervalSubscription$ = this.timer$.subscribe(data => {
        this.passedTime.setSeconds(data);
      }, err => {
        console.log('Error = ',err)
      }, () => {
        console.log('timer is ended');
      })
    } else {
      this.intervalSubscription$.unsubscribe();
      this.InitTimer();

    }
  }

  constructor() { }

  ngOnInit(): void {
    this.timeLength$.next(this.timeLength);
    this.passedTime = this.timeLength;
    this.InitTimer();
  }

  private InitTimer() {
    this.timer$ = timer(1000, 1000).pipe(
      map(i => {
        this.timeLength = this.DecreaseForSecond(this.timeLength);
        this.timeLength$.next(this.timeLength);
        return this.passedTime.getSeconds();
      }),
      takeWhile(a => this.isStopped$.value != true || (this.getTimeInSeconds(this.passedTime) == this.getTimeInSeconds(this.timeLength))),
      take(this.getTimeInSeconds(this.passedTime) + 1)
    );
  }

  private getTimeInSeconds(date: Date): number {
    let res = this.passedTime.getSeconds() + this.passedTime.getMinutes() * 60;
    return res;
  }

  private DecreaseForSecond(date : Date) : Date {
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    seconds = seconds - 1;
    if (seconds == 0) {
      minutes = minutes - 1;
      seconds = 59;
    }

    date.setMinutes(minutes);
    date.setSeconds(seconds);
    return date;
  }

  private getTimeInMiliSeconds(date : Date): number{
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let result = hours * 3600 + minutes * 60 + seconds;
    return result * 1000;
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription$) {
      this.intervalSubscription$.unsubscribe();
    }
    if (this.timerSubscription$) {
      this.timerSubscription$.unsubscribe();
    }

  }
}
