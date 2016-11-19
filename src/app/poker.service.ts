import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';


@Injectable()
export class PokerService {

  private deck: Array<any> = [];
  private bid: any;
  public deckObservable: BehaviorSubject<any[]> = new BehaviorSubject(null);
  public bidObservable: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }

  public getBid(): Observable<any> {
    return this.bidObservable.asObservable();
  }

  public getDeck(): Observable<any> {
    return this.deckObservable.asObservable();
  }

  public setBid(bid) {
    this.bid = bid;
    this.bidObservable.next(bid);
  }

  public setDeck(deck) {
    this.deck = deck;
    this.deckObservable.next(deck);
  }

  public seedDeck() {

  }

}
