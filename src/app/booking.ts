export interface Booking {
  id: number;
  roomId: number | undefined;
  checkInDate: Date | undefined;
  checkoutDate: Date | undefined;
}
