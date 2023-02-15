import { Component } from '@angular/core';
import { rooms, RoomsList } from '../rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  user = 'Karissa';
  rooms: RoomsList[] = rooms;
}
