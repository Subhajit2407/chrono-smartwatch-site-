
export type Product = {
  id: string;
  name: string;
  model: string;
  price: number;
  description: string;
  features: string[];
  specs: {
    [key: string]: string | number;
  };
  images: {
    [color: string]: string;
  };
  colors: {
    name: string;
    value: string;
    image: string;
  }[];
  strapOptions: {
    id: string;
    name: string;
    material: string;
    image: string;
    price: number;
  }[];
  categories: string[];
  isNew?: boolean;
};

const products: Product[] = [
  {
    id: "chrono-ultra",
    name: "Chrono Ultra",
    model: "Series 7",
    price: 399,
    description: "Experience revolutionary features with our flagship smartwatch. The Chrono Ultra offers unparalleled health tracking, a brilliant always-on Retina display, and comprehensive fitness monitoring in a sleek, durable design.",
    features: [
      "Always-on Retina display",
      "Advanced health sensors including ECG and Blood Oxygen",
      "Water resistant to 50 meters",
      "Up to 18 hours of battery life",
      "GPS + Cellular connectivity",
      "Crash detection and fall detection"
    ],
    specs: {
      display: "1.9 inch LTPO OLED",
      resolution: "484 x 396 pixels",
      processor: "Chrono S7 chip",
      storage: "32GB",
      battery: "18 hours",
      waterResistant: "50 meters",
      connectivity: "Wi-Fi, Bluetooth 5.3, NFC, LTE",
      sensors: "Heart rate, ECG, Blood Oxygen, Accelerometer, Gyroscope, Altimeter",
      dimensions: "45 x 38 x 10.7 mm",
      weight: "38.8g"
    },
    images: {
      "Black": "/lovable-uploads/26c805d6-8899-424b-8f25-55103173740c.png",
      "Silver": "/lovable-uploads/84de57b3-d759-412a-a0d2-9d387723ae0e.png",
      "Blue": "/lovable-uploads/6c73aa1c-0133-4e43-a879-bab9add4f87d.png"
    },
    colors: [
      { name: "Black", value: "#000000", image: "/lovable-uploads/26c805d6-8899-424b-8f25-55103173740c.png" },
      { name: "Silver", value: "#CCCCCC", image: "/lovable-uploads/84de57b3-d759-412a-a0d2-9d387723ae0e.png" },
      { name: "Blue", value: "#0047AB", image: "/lovable-uploads/6c73aa1c-0133-4e43-a879-bab9add4f87d.png" }
    ],
    strapOptions: [
      { id: "sport-black", name: "Sport Band", material: "Fluoroelastomer", image: "/lovable-uploads/26c805d6-8899-424b-8f25-55103173740c.png", price: 49 },
      { id: "braided-blue", name: "Braided Solo Loop", material: "Recycled yarn", image: "/lovable-uploads/6c73aa1c-0133-4e43-a879-bab9add4f87d.png", price: 99 },
      { id: "leather-brown", name: "Leather Link", material: "Leather", image: "/lovable-uploads/84de57b3-d759-412a-a0d2-9d387723ae0e.png", price: 99 }
    ],
    categories: ["premium", "health", "sport"],
    isNew: true
  },
  {
    id: "chrono-se",
    name: "Chrono SE",
    model: "Series 5",
    price: 279,
    description: "The perfect balance of style, features, and value. The Chrono SE offers essential health and fitness capabilities, customizable watch faces, and seamless integration with your smartphone.",
    features: [
      "Retina display",
      "Heart rate monitoring",
      "Water resistant to 50 meters",
      "Up to 18 hours of battery life",
      "GPS",
      "Fall detection"
    ],
    specs: {
      display: "1.78 inch LTPO OLED",
      resolution: "448 x 368 pixels",
      processor: "Chrono S5 chip",
      storage: "32GB",
      battery: "18 hours",
      waterResistant: "50 meters",
      connectivity: "Wi-Fi, Bluetooth 5.0, NFC",
      sensors: "Heart rate, Accelerometer, Gyroscope, Altimeter",
      dimensions: "44 x 38 x 10.7 mm",
      weight: "36.5g"
    },
    images: {
      "Black": "/lovable-uploads/b8fdc549-8692-4a25-89f8-29b7bad2486a.png", 
      "White": "/lovable-uploads/4c7d865b-9548-4752-bfb5-61701c457830.png"
    },
    colors: [
      { name: "Black", value: "#000000", image: "/lovable-uploads/b8fdc549-8692-4a25-89f8-29b7bad2486a.png" },
      { name: "White", value: "#FFFFFF", image: "/lovable-uploads/4c7d865b-9548-4752-bfb5-61701c457830.png" }
    ],
    strapOptions: [
      { id: "sport-black-se", name: "Sport Band", material: "Fluoroelastomer", image: "/lovable-uploads/b8fdc549-8692-4a25-89f8-29b7bad2486a.png", price: 49 },
      { id: "solo-white-se", name: "Solo Loop", material: "Liquid silicone rubber", image: "/lovable-uploads/4c7d865b-9548-4752-bfb5-61701c457830.png", price: 49 }
    ],
    categories: ["essential", "fitness", "everyday"]
  },
  {
    id: "chrono-sport",
    name: "Chrono Sport",
    model: "Series 6",
    price: 349,
    description: "Engineered for athletes and fitness enthusiasts. The Chrono Sport features advanced workout metrics, improved durability, extended battery life, and specialized training programs to help you reach your fitness goals.",
    features: [
      "High-brightness display for outdoor visibility",
      "Advanced workout metrics and training plans",
      "Water resistant to 100 meters",
      "Up to 36 hours of battery life",
      "Dual-frequency GPS for precise tracking",
      "Customizable action button"
    ],
    specs: {
      display: "1.92 inch LTPO OLED",
      resolution: "480 x 394 pixels",
      processor: "Chrono S6 chip",
      storage: "64GB",
      battery: "36 hours",
      waterResistant: "100 meters",
      connectivity: "Wi-Fi, Bluetooth 5.3, NFC, LTE",
      sensors: "Heart rate, Blood Oxygen, Temperature, Accelerometer, Gyroscope, Altimeter, Compass",
      dimensions: "46 x 39 x 11.8 mm",
      weight: "42g"
    },
    images: {
      "Red": "/lovable-uploads/fac1423a-ed6d-4a1b-a9d9-8206e3ee6950.png",
      "Blue": "/lovable-uploads/49328ba9-171f-424b-8ae6-3a787a55fafa.png"
    },
    colors: [
      { name: "Red", value: "#FF0000", image: "/lovable-uploads/fac1423a-ed6d-4a1b-a9d9-8206e3ee6950.png" },
      { name: "Blue", value: "#0047AB", image: "/lovable-uploads/49328ba9-171f-424b-8ae6-3a787a55fafa.png" }
    ],
    strapOptions: [
      { id: "trail-loop", name: "Trail Loop", material: "Nylon", image: "/lovable-uploads/fac1423a-ed6d-4a1b-a9d9-8206e3ee6950.png", price: 99 },
      { id: "alpine-loop", name: "Alpine Loop", material: "High-strength nylon", image: "/lovable-uploads/49328ba9-171f-424b-8ae6-3a787a55fafa.png", price: 99 }
    ],
    categories: ["sport", "outdoor", "premium"]
  }
];

export default products;
