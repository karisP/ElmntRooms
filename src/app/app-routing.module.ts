import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'room/:id', component: RoomDetailsComponent },
  { path: 'room/:id/booking', component: BookingDetailsComponent },
  { path: 'room/:id/confirmation', component: ConfirmationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
