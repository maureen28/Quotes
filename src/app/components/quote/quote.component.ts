import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('It takes real skills to trip over nothing,fall up the stairs and choke on air, I have those skills',
    'Anonymous', 'Moh', new Date(13 - 2 - 1980)),
    new Quote('First time in History, We can save the Human race by lying in front of the T.V and doing nothing, Lets not screw this up',
    'Mutahi Kagwe', 'Nimo', new Date(2 / 3 / 2020))
  ];

  addAQuote(quote) {
    quote.Date = new Date(quote.Date);
    this.quotes.push(quote);
  }
  deletingQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`);

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
