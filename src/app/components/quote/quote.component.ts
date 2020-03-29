import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote[]=[
  new Quote('The way i see it, if you want the rainbow,you gotta put up with the rain','Dolly Parton','Nimo',new Date(2020/3/4))
]
  constructor() { }

  ngOnInit(): void {
  }

}
