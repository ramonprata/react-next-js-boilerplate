export const PRODUCTS_MOCK = [
  {
    id: "1",
    name: "Notebook Pro X15",
    description:
      "High-performance laptop with 12th Gen Intel i7 processor, 16GB RAM, and 512GB SSD.",
    price: 7499.9,
    image: {
      filePath: "https://picsum.photos/id/180/600/400",
      alt: "Notebook Pro X15",
    },
  },
  {
    id: "2",
    name: "Smartphone Neo Z",
    description:
      "5G smartphone with 6.7” AMOLED display, triple 64MP camera, and 5000mAh battery.",
    price: 3999.0,
    image: {
      filePath: "https://picsum.photos/id/237/600/400",
      alt: "Smartphone Neo Z",
    },
  },
  {
    id: "3",
    name: "Headphones Pulse",
    description:
      "Bluetooth headset with active noise cancellation and up to 30 hours of battery life.",
    price: 899.9,
    image: {
      filePath: "https://picsum.photos/id/1080/600/400",
      alt: "Wireless Headphones Pulse",
    },
  },
  {
    id: "4",
    name: "UltraWide 34” Vision Monitor",
    description:
      "Curved UltraWide monitor with QHD resolution, 144Hz refresh rate, and HDR10 support.",
    price: 2599.0,
    image: {
      filePath: "https://picsum.photos/id/27/600/400",
      alt: "UltraWide 34” Vision Monitor",
    },
  },
  {
    id: "5",
    name: "RGB Mechanical Keyboard",
    description:
      "Gaming mechanical keyboard with Blue switches, RGB lighting, and programmable keys.",
    price: 499.9,
    image: {
      filePath: "https://picsum.photos/id/1062/600/400",
      alt: "RGB Storm Mechanical Keyboard",
    },
  },
];

export const HIGHLIGHTED_PRODUCTS_MOCK = PRODUCTS_MOCK.slice(0, 3);
