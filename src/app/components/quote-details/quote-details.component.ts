import { Component, OnInit, Output } from '@angular/core';
import { Quote } from 'src/app/quote';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Output() quote: Quote;
  numberOfLikes = 0;
  numberOfDislikes = 0;
  upVote(){
    this.numberOfLikes++;
  }
  downVote(){
    this.numberOfDislikes++;
  }
deleteQuote(deleting:boolean){
  this.isComplete.emit(deleting);
}
  constructor() { }

  ngOnInit(): void {
  }

}
