import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../rooms';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss'],
})
export class RoomDetailsComponent {
  room: Room | undefined;
  rooms: Room[] = [];
  selectedRoom: Room | undefined;

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService
  ) {}

  ngOnInit(): void {
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

  selectRoom(room: Room | undefined): void {
    this.selectedRoom = room;
  }
}
