import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // date picker properties
  todayDate: Date = new Date();

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  dateStart: Date | null | undefined = null;
  dateEnd: Date | null | undefined = null;

  //select && link/button properties
  disableSelect = new FormControl(true);
  linkEnabled: boolean = false;

  constructor(private bookingService: BookingService) {}

  //change handler for date picker, adds to booking instance, enables guest select
  onDateChanged(event: Partial<{ start: Date | null; end: Date | null }>) {
    this.dateStart = event.start;
    this.dateEnd = event.end;
    if (this.dateStart && this.dateEnd) {
      this.bookingService.setDates(this.dateStart, this.dateEnd);
      this.disableSelect.setValue(false);
    }
  }

  //watches for changes from the date range values
  ngAfterViewInit() {
    this.range.valueChanges.subscribe((event) => {
      if (event.start && event.end) {
        this.onDateChanged(event);
      }
    });
  }

  //guest select value change
  changeGuests(guests: string) {
    this.bookingService.setGuests(parseInt(guests));
    this.validate();
  }

  //validates that all fields have been set in the booking service before enabling the link button
  validate(): void {
    if (
      this.bookingService.getCheckInDate() &&
      this.bookingService.getCheckOutDate() &&
      this.bookingService.getGuests()
    ) {
      this.linkEnabled = true;
    }
  }
}
