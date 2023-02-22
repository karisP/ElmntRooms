import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RoomsComponent,
    RoomDetailsComponent,
    DatePickerComponent,
    BookingDetailsComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
