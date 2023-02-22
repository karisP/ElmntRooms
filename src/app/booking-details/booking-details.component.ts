import { Component, EventEmitter, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';
import { RoomService } from '../room.service';
import { Room } from '../rooms';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss'],
})
export class BookingDetailsComponent {
  checkInDate: Date | null = null;
  checkOutDate: Date | null = null;
  room: Room | undefined;
  rooms: Room[] = [];
  roomCost: number | undefined;
  numberOfNights: number | undefined;
  taxes: number | undefined;
  fees: number | undefined;
  totalPrice: number | undefined;
  cancellationFee: number | undefined;
  lastCancellationDate: Date | undefined;
  agreedToCancellationPolicy: boolean | undefined;

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private bookingService: BookingService
  ) {}

  ngOnInit() {
    this.checkInDate = this.bookingService.getCheckInDate();
    this.checkOutDate = this.bookingService.getCheckOutDate();
    this.getRooms();
    this.getRoomById();
    this.agreedToCancellationPolicy = false;
    this.setNumberOfNights(this.checkInDate, this.checkOutDate);
    this.roomCostCalculator();
    this.taxesCalculator();
    this.feesCalculator();
    this.totalPriceCalculator();
    this.cancellationFeeCalculator();
    this.calculateLastCancellationDate();
  }

  setNumberOfNights(start: Date | null, end: Date | null) {
    if (start && end) {
      const str1 = start.toDateString();
      const str2 = end.toDateString();
      var diff = Math.floor((Date.parse(str2) - Date.parse(str1)) / 86400000);
      this.numberOfNights = diff;
    }
  }

  getRooms(): void {
    this.roomService.getRooms().subscribe((rooms) => (this.rooms = rooms));
  }

  getRoomById(): void {
    const routeParams = this.route.snapshot.paramMap;
    const roomIdFromRoute = Number(routeParams.get('id'));
    this.bookingService.setRoomId(roomIdFromRoute);
    this.room = this.rooms.find((room) => room.roomId === roomIdFromRoute);
  }

  roomCostCalculator() {
    if (this.room && this.numberOfNights) {
      this.roomCost = this.room?.price * this.numberOfNights;
    }
  }

  taxesCalculator() {
    if (this.roomCost) {
      this.taxes = this.roomCost * 0.06;
    }
  }

  feesCalculator() {
    if (this.numberOfNights) {
      this.fees = 10 * this.numberOfNights;
    }
  }

  totalPriceCalculator() {
    if (this.roomCost && this.taxes && this.fees) {
      this.totalPrice = this.roomCost + this.taxes + this.fees;
    }
  }

  cancellationFeeCalculator() {
    if (this.roomCost) {
      this.cancellationFee = this.roomCost * 0.1;
    }
  }

  calculateLastCancellationDate() {
    if (this.checkInDate) {
      this.lastCancellationDate = new Date(
        this.checkInDate.valueOf() - 7 * 24 * 60 * 60 * 1000
      );
    }
  }

  agreeToPolicy(event: MatCheckboxChange) {
    this.agreedToCancellationPolicy = event.checked;
  }

  confirmBooking() {
    this.bookingService.setConfirmationCode();
  }
}
