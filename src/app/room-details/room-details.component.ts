import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rooms, RoomsList } from '../rooms';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss'],
})
export class RoomDetailsComponent {
  room: RoomsList | undefined;
  selectedRoom: RoomsList | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const roomIdFromRoute = Number(routeParams.get('id'));

    this.room = rooms.find((room) => room.roomId === roomIdFromRoute);
  }

  selectRoom(room: RoomsList | undefined) {
    this.selectedRoom = room;
    console.log('you have selected the', room?.name);
  }
}
