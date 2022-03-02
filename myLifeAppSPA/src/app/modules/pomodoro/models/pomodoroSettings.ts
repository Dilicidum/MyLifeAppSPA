import { Time } from "@angular/common";

export interface pomodoroSettings{
  Id: number,
  Name : string,
  WorkLength: Date,
  ShortBreakLength: Date,
  LongBreakLength: Date,
  CreatedAt: Date,
  isCurrent: boolean,
}
