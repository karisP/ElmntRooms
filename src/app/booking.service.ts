import { Injectable } from '@angular/core';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  randomNum = Math.floor(Math.random() * 100);
  booking: Booking = {
    id: this.randomNum,
    roomId: undefined,
    checkInDate: null,
    checkOutDate: null,
  };

  constructor() {}

  getCheckInDate() {
    return this.booking.checkInDate;
  }

  getCheckOutDate() {
    return this.booking.checkOutDate;
  }

  setDates(dateStart: Date | null, dateEnd: Date | null): void {
    this.booking.checkInDate = dateStart;
    this.booking.checkOutDate = dateEnd;
  }

  setRoomId(id: number): void {
    this.booking.roomId = id;
  }

  setConfirmationCode(): void {
    this.genRandomString(10);
    //TODO set to booking
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
