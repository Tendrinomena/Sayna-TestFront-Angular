import { Injectable } from '@angular/core';
import { Activities } from '../model/activities';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor() { }
  /**
   *  construct all data about recent activities
   */
  activities: Activities[]= [{
    id: 1,
    type: "sending",
    amount: "3,004.52",
    label: "To Martin Mitchel",
    date: "Today"
  },
  {
    id: 2,
    type: "sending",
    amount: "1,023.19",
    label: " To Jane Klamberberg",
    date: "Today"
  },
  {
    id: 3,
    type: "conversion",
    amount: "1,456.00",
    label: "EUR to USD",
    date: "Today"
  },
  {
    id: 4,
    type: "Cafe & Restaurants",
    amount: "5.99",
    label: "Starbucks",
    date: "Yesterday"
  }
];

//return one activity according to the parameter id
  getActivitiesByDate(date: string): Activities[]{
    return this.activities.filter((x)=>x.date==date) as Activities[];
  }

  getAllActivities(){
    return this.activities;
  }
}
