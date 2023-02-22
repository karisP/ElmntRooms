import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';
import { RoomService } from '../room.service';
import { Room } from '../rooms';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent {
  room: Room | undefined;
  rooms: Room[] = [];
  checkInDate: Date | null = null;
  checkOutDate: Date | null = null;
  confirmationCode: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    this.checkInDate = this.bookingService.getCheckInDate();
    this.checkOutDate = this.bookingService.getCheckOutDate();
    this.confirmationCode = this.bookingService.getConfirmationCode();
    this.getRooms();
    this.getRoomById();
  }

  getRooms(): void {
    this.roomService.getRooms().subscribe((rooms) => (this.rooms = rooms));
  }

  getRoomById(): void {
    const routeParams = this.route.snapshot.paramMap;
    const roomIdFromRoute = Number(routeParams.get('id'));
    this.room = this.rooms.find((room) => room.roomId === roomIdFromRoute);
  }
}
