import {Component, Input, OnInit} from '@angular/core';
import {RentalModel} from '../rental.model';

@Component({
  selector: 'app-rental-list-item',
  templateUrl: './rental-list-item.component.html',
  styleUrls: ['./rental-list-item.component.scss']
})
export class RentalListItemComponent implements OnInit {
  @Input() rental: RentalModel;

  constructor() { }

  ngOnInit() {
  }

}
