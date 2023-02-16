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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const roomIdFromRoute = Number(routeParams.get('id'));
    this.room = rooms.find((room) => room.roomId === roomIdFromRoute);
  }
}
