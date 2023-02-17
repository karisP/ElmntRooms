export interface Room {
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

export const MOCK_ROOMS: Room[] = [
  {
    roomId: 1,
    name: 'Golden Hour',
    description:
      'This room features a queen sized bed facing the sunset. Bask in the warm glow as you sink into our softest pillows.',
    price: 175,
    photo: 'https://posterstore.com/images/zoom/v4-kg-102.jpg',
    rating: 4.5,
    checkinTime: 3,
    checkoutTime: 11,
    amenities: [
      'A/C',
      'TV',
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
    roomId: 2,
    name: 'Gaia Suite',
    description:
      'Let us help calm your senses in our most grounded room. This suite features a king sized bed with our finest linens. Reconnect with the earth while enjoying our complimentary clay masks.',
    price: 400,
    photo:
      'http://cdn.home-designing.com/wp-content/uploads/2021/10/earthy-bedroom-decor.jpg',
    rating: 4.8,
    checkinTime: 3,
    checkoutTime: 11,
    amenities: [
      'A/C',
      'TV',
      'free parking',
      'continental breakfast',
      'hot stone massage',
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
    name: 'Zen Garden',
    description:
      'Take a deep breath of fresh air in our plant filled oasis. This room includes a double bed and a luxurous waterfall shower. Enjoy our complimentary teas and yoga class in this zen experience.',
    price: 250,
    photo:
      'https://cdn.decoist.com/wp-content/uploads/2021/03/decoist012-91604.jpg',
    rating: 3.9,
    checkinTime: 3,
    checkoutTime: 11,
    amenities: [
      'A/C',
      'TV',
      'free parking',
      'continental breakfast',
      'waterfall shower',
      'yoga class',
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
