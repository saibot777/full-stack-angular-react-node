import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './common/header/header.component';
import { RentalComponent } from './rental/rental.component';
import {RouterModule, Routes} from '@angular/router';
import { RentalListComponent } from './rental/rental-list/rental-list.component';
import { RentalListItemComponent } from './rental/rental-list-item/rental-list-item.component';

const routes: Routes = [
  {path: '', component: RentalComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
