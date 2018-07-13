import { Component, OnInit } from '@angular/core';
import {RentalService} from '../rental.service';
import {Subscription} from 'rxjs/Subscription';
import {RentalModel} from '../rental.model';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
  rentals: RentalModel[] = [];

  constructor(private rentalService: RentalService) { }

  ngOnInit() {
    const rentalSubscription = this.rentalService.getRentals();
      rentalSubscription
        .subscribe(
          (rentals: RentalModel[]) => this.rentals = rentals,
          err => console.log(err),
          () => console.log("Complete")
        );
  }

}
