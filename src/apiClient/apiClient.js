const BASE_URL = "https://api.advanziaeducation.com/api";
const API_KEY =
  "d7534cbd9ee8a1d277508f05318830010270e1c3699cacf82f8ec53f79b486a2";

export async function fetchApi(endpoint, options = {}) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!response.ok) {
    throw new Error("Request failed");
  }
  console.log(response);
  return response.json();
}

export const productList = [
  {
    id: 1,
    title: "Samsung Galaxy S23 Ultra",
    price: 1199.99,
    description: "256GB storage, 12GB RAM, 8K camera, S Pen included",
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1685141146547-30e0a8b0b5c6?w=400",
  },
  {
    id: 2,
    title: "MacBook Pro 16-inch",
    price: 2499.99,
    description: "M2 Pro chip, 512GB SSD, 16GB RAM, Space Gray",
    category: "laptops",
    image: "https://images.unsplash.com/photo-1517327062153-80e5b5b8b5c6?w=400",
  },
  {
    id: 3,
    title: "Sony WH-1000XM5 Headphones",
    price: 399.99,
    description: "Wireless noise cancelling, 30hr battery, multipoint",
    category: "audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
  },
  {
    id: 4,
    title: "iPad Pro 12.9-inch",
    price: 1099.99,
    description: "M2 chip, 128GB Wi-Fi, Liquid Retina XDR display",
    category: "tablets",
    image: "https://images.unsplash.com/photo-1544225153-2d0b8b8b8b8b?w=400",
  },
  {
    id: 5,
    title: "DJI Mini 3 Pro Drone",
    price: 759.99,
    description:
      "4K video, 34min flight time, tri-directional obstacle sensing",
    category: "drones",
    image: "https://images.unsplash.com/photo-1508625329600-6aa0b5b6b5c6?w=400",
  },
  {
    id: 6,
    title: "Canon EOS R6 Mark II",
    price: 2499.99,
    description: "24.2MP full-frame, 4K 60fps, animal tracking AF",
    category: "cameras",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b2b8b5c6?w=400",
  },
  {
    id: 7,
    title: "Nike Air Jordan 1 Retro",
    price: 170.0,
    description: "Men's size 9-12, Black/White colorway",
    category: "shoes",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
  },
  {
    id: 8,
    title: "Samsung 55-inch 4K TV",
    price: 899.99,
    description: "Crystal UHD, Tizen OS, HDR10+, Smart TV",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1593359732424-b4d5b5b8b5c6?w=400",
  },
];
