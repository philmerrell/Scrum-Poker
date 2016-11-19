import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, Event as NavigationEvent } from '@angular/router';
import { PokerService } from '../poker.service';

import 'rxjs/add/operator/filter';

declare var ramjet: any;
declare var window: any;

@Component({
  selector: 'app-poker',
  templateUrl: './poker.component.html',
  styleUrls: ['./poker.component.css']
})
export class PokerComponent implements OnInit {

  public deck = [1, 2, 3, 5, 8, 13, 21, 34, 55];
  public bid: any;

  constructor(private pokerService: PokerService, private router: Router) {

  }

  ngOnInit() {}


  setBid(bid) {
    this.pokerService.setBid(bid);
    this.router.navigate(['/card']);
  }


}
