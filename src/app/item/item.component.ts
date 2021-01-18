import { Component, OnInit, Input } from '@angular/core';
import { IFaq } from '../interfaces/data.interface'
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input('item')
  item:IFaq;

  constructor() { }

  ngOnInit(): void {
  }

}
