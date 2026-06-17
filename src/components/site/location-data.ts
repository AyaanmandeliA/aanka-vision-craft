import type { MapPinData } from "@/components/site/UaeMap";
import khau1 from "@/assets/brands/khau/storefront.jpg";
import khau2 from "@/assets/brands/khau/store-2.jpg";
import khau3 from "@/assets/brands/khau/store-3.jpg";
import khauFood1 from "@/assets/brands/khau/food-1.jpg";
import khauFood2 from "@/assets/brands/khau/food-2.jpg";
import khauFood3 from "@/assets/brands/khau/food-3.jpg";
import zaika1 from "@/assets/brands/zaika/storefront.webp";
import zaika2 from "@/assets/brands/zaika/counter.webp";
import cem1 from "@/assets/brands/cem/storefront.jpg";
import cem2 from "@/assets/brands/cem/interior-1.jpg";
import cem3 from "@/assets/brands/cem/interior-2.jpg";
import cem4 from "@/assets/brands/cem/team-1.jpg";
import cel1 from "@/assets/brands/cel/salon.jpg";
import cel2 from "@/assets/brands/cel/storefront.png";
import cel3 from "@/assets/brands/cel/interior-1.png";
import cel4 from "@/assets/brands/cel/interior-2.png";
import cel5 from "@/assets/brands/cel/interior-3.png";
import decoImg from "@/assets/brands/deco/corridor.jpg";
import constructionImg from "@/assets/brand-construction.jpg";

export type Venue = {
  brand: string;
  area: string;
  emirate: "Dubai" | "Abu Dhabi" | "Sharjah" | "Ras Al Khaimah" | "Fujairah" | "Ajman" | "Umm Al Quwain";
  address: string;
  phone?: string;
  hours?: string;
  mapsHref: string;
  /** Brand thumbnail for the venue card */
  img: string;
  /** Approximate position on the stylised UAE map (0–100) */
  pin: { x: number; y: number };
};

export const venues: Venue[] = [
  {
    brand: "Khau Galli",
    area: "JLT — Cluster T",
    emirate: "Dubai",
    address: "Fortune Executive, Lake Level, Cluster T, JLT, Dubai",
    phone: "+971 4 589 6525",
    hours: "Daily · 10:00 – 23:00",
    mapsHref: "https://maps.google.com/?q=Khau+Galli+JLT+Cluster+T+Dubai",
    img: khau1,
    pin: { x: 36, y: 60 },
  },
  {
    brand: "Khau Galli",
    area: "Ibn Battuta Mall",
    emirate: "Dubai",
    address: "IBN-G234-F12, Food Court, Ibn Battuta Mall, Dubai",
    phone: "+971 55 464 5864",
    hours: "Daily · 08:00 – 23:30",
    mapsHref: "https://maps.google.com/?q=Khau+Galli+Ibn+Battuta+Mall+Dubai",
    img: khau2,
    pin: { x: 30, y: 63 },
  },
  {
    brand: "Khau Galli",
    area: "Dubai Silicon Oasis",
    emirate: "Dubai",
    address: "Silicon Central Mall, Dubai Silicon Oasis, Dubai",
    phone: "+971 52 385 1394",
    hours: "Daily · 09:00 – 23:00",
    mapsHref: "https://maps.google.com/?q=Khau+Galli+Silicon+Central+Mall+Dubai",
    img: khau3,
    pin: { x: 54, y: 55 },
  },
  {
    brand: "Khau Galli",
    area: "Deira City Centre",
    emirate: "Dubai",
    address: "1st Floor Food Court, Shop FC11A, Deira City Centre, Dubai",
    phone: "+971 56 132 5188",
    hours: "Daily · 10:00 – 23:00",
    mapsHref: "https://maps.google.com/?q=Khau+Galli+Deira+City+Centre+Dubai",
    img: khauFood1,
    pin: { x: 48, y: 48 },
  },
  {
    brand: "Khau Galli",
    area: "Al Quoz",
    emirate: "Dubai",
    address: "Al Quoz Mall, Al Quoz 3, Dubai",
    phone: "+971 56 982 3223",
    hours: "Daily · 10:00 – 23:00",
    mapsHref: "https://maps.google.com/?q=Khau+Galli+Al+Quoz+Mall+Dubai",
    img: khauFood2,
    pin: { x: 40, y: 58 },
  },
  {
    brand: "Khau Galli",
    area: "Mega Mall — Sharjah",
    emirate: "Sharjah",
    address: "3rd Floor, Mega Mall, Al Istiklal Street, Sharjah",
    phone: "+971 6 574 2574",
    hours: "Daily · 10:00 – 23:00",
    mapsHref: "https://maps.google.com/?q=Khau+Galli+Mega+Mall+Sharjah",
    img: khauFood3,
    pin: { x: 58, y: 44 },
  },
  {
    brand: "House of Zaika",
    area: "Ibn Battuta Mall",
    emirate: "Dubai",
    address: "LF-45, Upper Food Court, Ibn Battuta Mall, Jebel Ali, Dubai",
    phone: "+971 52 584 6383",
    hours: "Daily · 10:00 – 23:00",
    mapsHref: "https://maps.google.com/?q=House+of+Zaika+Ibn+Battuta+Mall+Dubai",
    img: zaika2,
    pin: { x: 29, y: 64 },
  },
  {
    brand: "Cutting Edge Gents",
    area: "Ibn Battuta Mall",
    emirate: "Dubai",
    address: "Shop 20, Floor 1, Persia Court, Ibn Battuta Mall, Dubai",
    phone: "+971 4 589 6742",
    hours: "Daily · 10:00 – 22:00",
    mapsHref: "https://maps.google.com/?q=Cutting+Edge+Gents+Ibn+Battuta+Mall+Dubai",
    img: cem1,
    pin: { x: 31, y: 64 },
  },
  {
    brand: "Cutting Edge Gents",
    area: "JLT — Cluster T",
    emirate: "Dubai",
    address: "Shop BS11, 1 Lake Plaza, Cluster T, JLT, Dubai",
    phone: "+971 52 322 1838",
    hours: "Daily · 10:00 – 22:00",
    mapsHref: "https://maps.google.com/?q=Cutting+Edge+Gents+JLT+Dubai",
    img: cem2,
    pin: { x: 37, y: 61 },
  },
  {
    brand: "Cutting Edge Gents",
    area: "JLT — Cluster B",
    emirate: "Dubai",
    address: "Shop 17, Lake View Tower, Cluster B, JLT, Dubai",
    phone: "+971 58 605 0594",
    hours: "Daily · 10:00 – 22:00",
    mapsHref: "https://maps.google.com/?q=Cutting+Edge+Gents+Cluster+B+JLT+Dubai",
    img: cem3,
    pin: { x: 35, y: 59 },
  },
  {
    brand: "Cutting Edge Gents",
    area: "Dubai Silicon Oasis",
    emirate: "Dubai",
    address: "Shop D108, First Floor, Silicon Central Mall, Dubai Silicon Oasis",
    phone: "+971 52 565 3936",
    hours: "Daily · 10:00 – 22:00",
    mapsHref: "https://maps.google.com/?q=Cutting+Edge+Gents+Silicon+Oasis+Dubai",
    img: cem4,
    pin: { x: 55, y: 55 },
  },
  {
    brand: "Cutting Edge Ladies",
    area: "Ibn Battuta Mall",
    emirate: "Dubai",
    address: "LF-17,18,19, MetroLink, Ibn Battuta Mall, Dubai",
    phone: "+971 4 430 6950",
    hours: "Daily · 10:00 – 22:00",
    mapsHref: "https://maps.google.com/?q=Cutting+Edge+Ladies+Ibn+Battuta+Mall+Dubai",
    img: cel1,
    pin: { x: 32, y: 65 },
  },
  {
    brand: "Cutting Edge Ladies",
    area: "JLT — Cluster U",
    emirate: "Dubai",
    address: "Al Seef Tower 3, Cluster U, JLT, Dubai",
    phone: "+971 4 422 8997",
    hours: "Daily · 10:00 – 22:00",
    mapsHref: "https://maps.google.com/?q=Cutting+Edge+Ladies+JLT+Dubai",
    img: cel2,
    pin: { x: 38, y: 62 },
  },
  {
    brand: "Cutting Edge Ladies",
    area: "Dubai Marina",
    emirate: "Dubai",
    address: "Shop 1, Ground Floor, Dubai Marina Mall, Dubai",
    phone: "+971 4 442 1110",
    hours: "Daily · 10:00 – 22:00",
    mapsHref: "https://maps.google.com/?q=Cutting+Edge+Ladies+Dubai+Marina+Mall",
    img: cel3,
    pin: { x: 33, y: 62 },
  },
  {
    brand: "Cutting Edge Ladies",
    area: "Dubai Silicon Oasis",
    emirate: "Dubai",
    address: "Shop 107, 1st Floor, Silicon Central Mall, Dubai Silicon Oasis",
    phone: "+971 56 418 8313",
    hours: "Daily · 10:00 – 22:00",
    mapsHref: "https://maps.google.com/?q=Cutting+Edge+Ladies+Silicon+Oasis+Dubai",
    img: cel4,
    pin: { x: 56, y: 55 },
  },
  {
    brand: "Cutting Edge Ladies",
    area: "Mega Mall — Sharjah",
    emirate: "Sharjah",
    address: "2nd Floor, Mega Mall, Al Istiklal Street, Sharjah",
    phone: "+971 52 186 5938",
    hours: "Daily · 10:00 – 22:00",
    mapsHref: "https://maps.google.com/?q=Cutting+Edge+Ladies+Mega+Mall+Sharjah",
    img: cel5,
    pin: { x: 60, y: 44 },
  },
  {
    brand: "Deco Vibes",
    area: "Studio",
    emirate: "Dubai",
    address: "Warehouse 14, Dubai Investment Park 2, Dubai",
    phone: "+971 55 944 8124",
    hours: "Sun – Thu · 09:00 – 18:00",
    mapsHref: "https://maps.google.com/?q=Dubai+Investment+Park+2+Dubai",
    img: decoImg,
    pin: { x: 22, y: 65 },
  },
  {
    brand: "Aanka Constructions",
    area: "Headquarters",
    emirate: "Dubai",
    address: "Warehouse 14, Dubai Investment Park 2, Dubai",
    phone: "+971 50 784 7968",
    hours: "Sun – Thu · 09:00 – 18:00",
    mapsHref: "https://maps.google.com/?q=Dubai+Investment+Park+2+Dubai",
    img: constructionImg,
    pin: { x: 30, y: 62 },
  },
];

export const mapPins: MapPinData[] = venues.map((v, i) => ({
  id: `${v.brand}-${i}`,
  brand: v.brand,
  area: v.area,
  x: v.pin.x,
  y: v.pin.y,
}));
