import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  booking: Booking | undefined;

  constructor() {}

  setId(): void {
    const randomNum = Math.floor(Math.random() * 100);
    // this.booking = {
    //   ...this.booking,
    //   id: randomNum,
    // }
  }

  setDates(
    range: FormGroup<{
      start: FormControl<Date | null>;
      end: FormControl<Date | null>;
    }>
  ): void {
    console.log('setDates', range);
  }

  setRoomId(id: number): void {
    console.log(id);
  }

  setConfirmationCode(): void {
    this.genRandomString(10);
    //set to booking
  }

  genRandomString(length: number) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charLength = chars.length;
    var result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
  }
}
