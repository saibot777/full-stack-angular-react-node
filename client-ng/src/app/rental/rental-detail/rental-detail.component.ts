import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RentalService} from '../rental.service';
import {RentalModel} from '../rental.model';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {
  rental: RentalModel;

  constructor(private route: ActivatedRoute, private rentalService: RentalService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => this.getRental( params['id'])
    );
  }

  getRental(rentalId: string) {
    this.rentalService.getRentalById(rentalId)
      .subscribe((rental: RentalModel) => this.rental = rental);
  }

}
