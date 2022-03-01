import { Component, OnInit } from '@angular/core';
//import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faChartBar } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisV} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'timer-menu',
  templateUrl: './timer-menu.component.html',
  styleUrls: ['./timer-menu.component.css']
})
export class TimerMenuComponent implements OnInit {
  faCheck = faCheckCircle;
  faChart = faChartBar;
  faSettings = faEllipsisV;
  constructor() { }

  ngOnInit(): void {
  }

}
