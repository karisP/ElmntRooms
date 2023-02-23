import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private bookingService: BookingService) {}
  changeGuests(guests: string) {
    this.bookingService.setGuests(parseInt(guests));
  }
}
