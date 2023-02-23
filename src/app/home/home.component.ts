import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  linkEnabled: boolean = false;
  disableSelect = new FormControl(false);

  constructor(private bookingService: BookingService) {}

  changeGuests(guests: string) {
    this.bookingService.setGuests(parseInt(guests));
    this.validate();
  }

  validate(): void {
    if (
      this.bookingService.getCheckInDate() &&
      this.bookingService.getCheckOutDate()
    ) {
      this.disableSelect.setValue(false);
      if (this.bookingService.getGuests()) {
        this.linkEnabled = true;
      }
    }
  }
}
