import { Component, OnInit } from '@angular/core';
import { Limit } from '../model/limit';
import { LimitService } from '../services/limit.service';

@Component({
  selector: 'app-limit',
  templateUrl: './limit.component.html',
  styleUrls: ['./limit.component.scss']
})
export class LimitComponent implements OnInit {

  allLimits!: Limit[];
  constructor(
    private limitService: LimitService
  ) { }

  ngOnInit(): void {
    this.allLimits = this.limitService.getAllLimits();
  }

}
