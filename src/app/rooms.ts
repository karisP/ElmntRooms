export interface RoomsList {
  roomId: number;
  name: string;
  description: string;
  price: number;
  photo: string;
  rating: number;
  checkinTime: number;
  checkoutTime: number;
  amenities: string[];
  reviews: Review[];
}

interface Review {
  id: number;
  name: string;
  rating: number;
  message: string;
}

export const rooms: RoomsList[] = [
  {
    roomId: 1,
    name: 'Room 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 175,
    photo: 'https://posterstore.com/images/zoom/v4-kg-102.jpg',
    rating: 4.5,
    checkinTime: 3,
    checkoutTime: 11,
    amenities: ['A/C', 'TV', 'iron', 'free parking', 'continental breakfast'],
    reviews: [
      {
        id: 1,
        name: 'Sara',
        rating: 5,
        message: 'This room restored my soul and refreshed my energy.',
      },
      {
        id: 2,
        name: 'Nicole',
        rating: 4,
        message: 'Would definitely stay here again.',
      },
      {
        id: 3,
        name: 'John',
        rating: 4.5,
        message: 'The perfect getaway from a busy life.',
      },
    ],
  },
  {
    roomId: 2,
    name: 'Room 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 400,
    photo:
      'http://cdn.home-designing.com/wp-content/uploads/2021/10/earthy-bedroom-decor.jpg',
    rating: 4.8,
    checkinTime: 3,
    checkoutTime: 11,
    amenities: [
      'A/C',
      'TV',
      'iron',
      'free parking',
      'continental breakfast',
      'private balcony',
    ],
    reviews: [
      {
        id: 1,
        name: 'Sara',
        rating: 5,
        message: 'This room restored my soul and refreshed my energy.',
      },
      {
        id: 2,
        name: 'Nicole',
        rating: 4,
        message: 'Would definitely stay here again.',
      },
      {
        id: 3,
        name: 'John',
        rating: 4.5,
        message: 'The perfect getaway from a busy life.',
      },
    ],
  },
  {
    roomId: 3,
    name: 'Room 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 250,
    photo:
      'https://cdn.decoist.com/wp-content/uploads/2021/03/decoist012-91604.jpg',
    rating: 3.7,
    checkinTime: 3,
    checkoutTime: 11,
    amenities: [
      'A/C',
      'TV',
      'iron',
      'free parking',
      'continental breakfast',
      'waterfall shower',
    ],
    reviews: [
      {
        id: 1,
        name: 'Sara',
        rating: 5,
        message: 'This room restored my soul and refreshed my energy.',
      },
      {
        id: 2,
        name: 'Nicole',
        rating: 4,
        message: 'Would definitely stay here again.',
      },
      {
        id: 3,
        name: 'John',
        rating: 4.5,
        message: 'The perfect getaway from a busy life.',
      },
    ],
  },
];
