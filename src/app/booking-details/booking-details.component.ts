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
  room: Room | undefined;
  rooms: Room[] = [];
  roomCost: number | undefined;
  numberOfNights: number | undefined;
  taxes: number | undefined;
  fees: number | undefined;
  totalPrice: number | undefined;
  cancellationFee: number | undefined;
  agreedToCancellationPolicy: boolean | undefined;

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private bookingService: BookingService
  ) {}

  ngOnInit() {
    this.getRooms();
    this.getRoomById();
    this.agreedToCancellationPolicy = false;
    // TODO: replace later with actual dates
    this.numberOfNights = 4;
    this.roomCostCalculator();
    this.taxesCalculator();
    this.feesCalculator();
    this.totalPriceCalculator();
    this.cancellationFeeCalculator();
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

  agreeToPolicy(event: MatCheckboxChange) {
    this.agreedToCancellationPolicy = event.checked;
  }
}
