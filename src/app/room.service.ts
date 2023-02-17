import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_ROOMS, Room } from './rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor() {}

  getRooms(): Observable<Room[]> {
    const rooms = of(MOCK_ROOMS);
    return rooms;
  }
}
