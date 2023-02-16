import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';

const routes: Routes = [
  { path: '', component: RoomsComponent },
  { path: 'room/:id', component: RoomDetailsComponent },
  { path: 'room/:id/booking', component: BookingDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
