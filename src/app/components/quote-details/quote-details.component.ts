import { Component, OnInit, Input } from '@angular/core';
import { Quote } from 'src/app/quote';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quote;
  numberOfLikes = 0;
  numberOfDislikes = 0;
  upVote
  constructor() { }

  ngOnInit(): void {
  }

}
