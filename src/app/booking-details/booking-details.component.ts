import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rooms, RoomsList } from '../rooms';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss'],
})
export class BookingDetailsComponent {
  room: RoomsList | undefined;
  roomCost: number | undefined;
  numberOfNights: number | undefined;
  taxes: number | undefined;
  fees: number | undefined;
  totalPrice: number | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const roomIdFromRoute = Number(routeParams.get('id'));
    this.room = rooms.find((room) => room.roomId === roomIdFromRoute);
    // replace later with actual dates
    this.numberOfNights = 4;
    this.roomCostCalculator();
    this.taxesCalculator();
    this.feesCalculator();
    this.totalPriceCalculator();
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
}
