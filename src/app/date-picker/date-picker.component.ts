import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent {
  todayDate: Date = new Date();

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  dateStart: Date | null | undefined = null;
  dateEnd: Date | null | undefined = null;

  constructor(private bookingService: BookingService) {}

  onDateChanged(event: Partial<{ start: Date | null; end: Date | null }>) {
    this.dateStart = event.start;
    this.dateEnd = event.end;
    if (this.dateStart && this.dateEnd) {
      this.bookingService.setDates(this.dateStart, this.dateEnd);
    }
  }

  ngAfterViewInit() {
    this.range.valueChanges.subscribe((event) => {
      if (event.start && event.end) {
        this.onDateChanged(event);
      }
    });
  }
}
