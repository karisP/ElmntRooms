export interface Booking {
  id: number;
  roomId: number | undefined;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  confirmationCode: string | undefined;
}
