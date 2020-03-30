import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/quote';
// import { EventEmitter } from 'protractor';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  numberOfLikes = 0;
  numberOfDislikes = 0;

  upVote() {
    this.numberOfLikes++;
  }

  downVote() {
    this.numberOfDislikes++;
  }
  
  deleteQuote(deleting: boolean) {
    this.isComplete.emit(deleting);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
