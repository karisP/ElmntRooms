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
    confirmationCode: undefined,
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

  getConfirmationCode() {
    return this.booking.confirmationCode;
  }

  setConfirmationCode(): void {
    this.booking.confirmationCode = this.genRandomString(10);
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
