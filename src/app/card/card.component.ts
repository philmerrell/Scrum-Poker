import { Component, OnInit } from '@angular/core';
import { PokerService } from '../poker.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public bid: any;

  constructor(private pokerService: PokerService) { }

  ngOnInit() {
    this.pokerService.getBid()
        .subscribe(bid => {
          this.bid = bid;
        });
  }

}
