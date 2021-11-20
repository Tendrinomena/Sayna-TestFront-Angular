import { Component, Input, OnInit } from '@angular/core';
import { Activities } from '../model/activities';
import { ActivitiesService } from '../services/activities.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  activities!: Activities[];
  todayActivities!: Activities[];
  yestdayActivities!: Activities[];
  constructor(
    private activityService: ActivitiesService
  ) { }

  ngOnInit(): void {
    this.activities = this.activityService.getAllActivities();
    this.todayActivities = this.activityService.getActivitiesByDate('Today');
    this.yestdayActivities = this.activityService.getActivitiesByDate('Yesterday');
  }



}
