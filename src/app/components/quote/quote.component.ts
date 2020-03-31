import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('It takes real skills to trip over nothing,fall up the stairs and choke on air, I have those skills', 'Anonymous', 'Moh', new Date(13-2-2010)),
    new Quote('The way i see it, if you want the rainbow,you gotta put up with the rain', 'Dolly Parton', 'Nimo', new Date(2020 / 3 / 4))
  ];

  addAQuote(quote) {
    this.quotes.push(quote)
  }
  deletingQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`);
    
    if (toDelete) {
      this.quotes.splice(index, 1)
    }
  }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
