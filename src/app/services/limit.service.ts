import { Injectable } from '@angular/core';
import { Limit } from '../model/limit';

@Injectable({
  providedIn: 'root'
})
export class LimitService {

  constructor() { }
   /**
   *  construct all data about limits
   */
    limits: Limit[]= [{
      id: 1,
      type: "Credit",
      amount: "1500",
      usd_amount: "2000"
    },
    {
      id: 2,
      type: "Online",
      amount: "1324",
      usd_amount: "1500"
    }
  ];

  //return all limits
  getAllLimits(){
    return this.limits;
  }

}
