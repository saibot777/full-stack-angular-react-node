import {s} from '@angular/core/src/render3';

export interface RentalModel {
  id: string | number;
  title: string;
  city: string;
  street: string;
  category: string;
  image: string;
  bedrooms: number;
  description: string;
  dailyRate: string;
  shared: boolean;
  createdAt: string;
}
