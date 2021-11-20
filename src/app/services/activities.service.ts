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
    receiver: "Martin Mitchel"
  },
  {
    id: 2,
    type: "visa",
    amount: "1,023.19",
    receiver: "Jane Klamberberg"
  }];

//return one activity according to the parameter id
  getActivitiesById(id: number): Activities{
    return this.activities.find((x)=>x.id==id) as Activities;
  }
}
