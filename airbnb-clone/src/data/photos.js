export const PHOTO_CATEGORIES = [
  {
    id: 'exterior',
    title: 'Exterior',
    photos: [
      '/room_main.jpeg'
    ]
  },
  {
    id: 'living_room',
    title: 'Living room',
    amenities: 'Sofa · Air conditioning · Ceiling fan · TV',
    photos: [
      '/room_living_room.jpeg'
    ]
  },
  {
    id: 'bedroom',
    title: 'Bedroom',
    amenities: 'Queen bed · Wardrobe',
    photos: [
      '/room_bedroom.jpeg'
    ]
  },
  {
    id: 'bathroom',
    title: 'Full bathroom',
    amenities: 'Shower · Toilet · Sink',
    photos: [
      '/room_bathroom.jpeg'
    ]
  },
  {
    id: 'gym',
    title: 'Gym',
    amenities: 'Treadmill · Weights',
    photos: [
      '/room_gym.jpeg'
    ]
  },
  {
    id: 'additional',
    title: 'Additional photos',
    photos: [
      '/room_bar.jpeg'
    ]
  }
];

// Flat list of all photos for Lightbox and Gallery (first 5)
export const PHOTOS = PHOTO_CATEGORIES.flatMap(cat => cat.photos);
