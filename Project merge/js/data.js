const listUser = [
  {
    id: 5,
    name: "Nguyen The Hung",
    email: "hungnt.se@gmail.com",
    user: "hungnt",
    pass: "123",
    phone: "0123456789",
    role: "hotel",
    hotelInfo: {
      name: "Hotel Of Hung",
      picture: "https://mdbootstrap.com/img/Photos/Others/img%20(16).jpg",
      stars: 4,
      place: "Ha noi",
      phone: "0123456789",
      reviews: [
        {
          reviewId: 2,
        },
        {
          reviewId: 4,
        },
      ],
    },
  },
  {
    id: 1,
    name: "User Two",
    email: "username1@gmail.com",
    user: "username1",
    pass: "123tnvn",
    phone: "0123456789",
    role: "user",
  },
  {
    id: 2,
    name: "User Three",
    email: "username2@gmail.com",
    user: "username2",
    pass: "123tnvn1",
    phone: "0123456786",
    role: "user",
  },
  {
    id: 3,
    name: "User Four",
    email: "username3@gmail.com",
    user: "username3",
    pass: "123tnvn2",
    phone: "0123456787",
    role: "user",
  },
  {
    id: 4,
    name: "User Five",
    email: "username4@gmail.com",
    user: "username4",
    pass: "123tnvn3",
    phone: "0123456788",
    role: "hotel",
    hotelInfo: {
      name: "Hotel Of User Five",
      picture: "https://mdbootstrap.com/img/Photos/Others/img%20(16).jpg",
      stars: 4,
      place: "Ha noi",
      phone: "0123456789",
    },
  },
  {
    id: 6,
    name: "Nguyen The Hung",
    email: "hungnt.user@gmail.com",
    user: "hungnt1",
    pass: "123",
    phone: "0123456789",
    role: "user",
  },
];

const listRooms = [
  {
    id: 1,
    userId: 5,
    name: "King Room",
    picture:
      "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/95/2016/12/21105513/MH_Grand_Premium.jpg",
    stars: 5,
    numberOfPerson: 4,
    numberOfRoom: 2,
    description:
      "Free wifi, 1 single bed, room area: 30m², bathroom with shower & bathtub, no smoking",
    price: 3e5,
    phone: 09123345678,
    place: "Ha Noi",
  },
  {
    id: 2,
    userId: 5,
    name: "Queen Room",
    picture:
      "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    stars: 5,
    numberOfPerson: 4,
    numberOfRoom: 6,
    description:
      "Free wifi, 1 single bed, room area: 30m², bathroom with shower & bathtub, no smoking",
    price: 3e5,
    phone: 09123345678,
    place: "Ha Noi",
  },
  {
    id: 3,
    userId: 4,
    name: "King Room",
    picture:
      "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/95/2016/12/21105513/MH_Grand_Premium.jpg",
    stars: 5,
    numberOfRoom: 2,
    description:
      "Free wifi, 1 single bed, room area: 30m², bathroom with shower & bathtub, no smoking",
    price: 3e5,
    phone: 09123345678,
    place: "Ha Noi",
  },
];

// const listRooms = [
//   {
//     picture:
//       "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/95/2016/12/21105513/MH_Grand_Premium.jpg",
//     numOfPerson: 2,
//     description:
//       "Free wifi, 1 single bed, room area: 30m², bathroom with shower & bathtub, no smoking",
//     price: 3e5,
//     userId: 5,
//   },
//   {
//     picture:
//       "https://pix6.agoda.net/hotelImages/5082490/84447935/b3293e754bd76e93ceace4f96602cc7a.jpg?s=1024x768",
//     numOfPerson: 2,
//     description:
//       "Free wifi, 1 large double bed, room area: 30m², bathroom with shower & bathtub, no smoking",
//     price: 4e5,
//     userId: 5,
//   },
//   {
//     picture:
//       "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/95/2016/12/21145815/3546883_XL-3.jpg",
//     numOfPerson: 5,
//     description:
//       "Free wifi, 1 large double bed, room area: 30m², bathroom with shower & bathtub, no smoking",
//     price: 5e5,
//     userId: 4,
//   },
//   {
//     picture:
//       "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/95/2016/12/21145815/3546883_XL-3.jpg",
//     numOfPerson: 1,
//     description:
//       "Free wifi, 1 single bed, room area: 25m², bathroom with shower & bathtub.",
//     price: 3e5,
//     userId: 4,
//   },
// ];

const reviewsHotel = [
  {
    id: 1,
    reviewId: 1,
    userId: 4,
    comment: "you will know how good this room is",
    rating: "Good",
  },
  {
    id: 2,
    hotelId: 4,
    reviewId: 1,
    userId: 4,
    comment: "this room just bad",
    rating: "Bad",
  },
  {
    id: 2,
    reviewId: 2,
    userId: 5,
    comment: "dont book this room",
    rating: "Bad",
  },
  {
    id: 3,
    reviewId: 2,
    userId: 5,
    comment: "i feel like this room is from heaven",
    rating: "Good",
  },
];
