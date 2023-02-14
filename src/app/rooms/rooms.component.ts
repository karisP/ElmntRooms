import { Component } from '@angular/core';
import { RoomsList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  user = 'Karissa';
  rooms: RoomsList[] = [
    {
      roomId: 1,
      name: 'Room 1',
      price: 175,
      photo: 'https://posterstore.com/images/zoom/v4-kg-102.jpg',
      rating: 4.5,
    },
    {
      roomId: 2,
      name: 'Room 2',
      price: 400,
      photo:
        'http://cdn.home-designing.com/wp-content/uploads/2021/10/earthy-bedroom-decor.jpg',
      rating: 4.8,
    },
    {
      roomId: 3,
      name: 'Room 3',
      price: 250,
      photo:
        'https://cdn.decoist.com/wp-content/uploads/2021/03/decoist012-91604.jpg',
      rating: 3.7,
    },
  ];
}
