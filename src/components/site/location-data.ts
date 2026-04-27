import type { MapPinData } from "@/components/site/UaeMap";
import khauImg from "@/assets/brands/khau-galli.jpg";
import zaikaImg from "@/assets/brands/zaika.jpg";
import gentsImg from "@/assets/brands/gents.webp";
import ladiesImg from "@/assets/brands/ladies.jpg";
import decoImg from "@/assets/brands/deco.jpg";
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
    area: "DMCC",
    emirate: "Dubai",
    address: "Jumeirah Lakes Towers, DMCC, Dubai",
    phone: "+971 50 784 7968",
    hours: "Daily · 12:00 – 23:30",
    mapsHref: "https://maps.google.com/?q=Khau+Galli+DMCC+Dubai",
    img: khauImg,
    pin: { x: 36, y: 60 },
  },
  {
    brand: "House of Zaika",
    area: "Dubai",
    emirate: "Dubai",
    address: "Dubai, United Arab Emirates",
    phone: "+971 50 784 7968",
    hours: "Daily · 13:00 – 00:00",
    mapsHref: "https://maps.google.com/?q=House+of+Zaika+Dubai",
    img: zaikaImg,
    pin: { x: 40, y: 56 },
  },
  {
    brand: "Cutting Edge Gents",
    area: "Multiple",
    emirate: "Dubai",
    address: "Multiple destinations across the UAE",
    phone: "+971 50 784 7968",
    hours: "Daily · 10:00 – 22:00",
    mapsHref: "https://cuttingedgemens.com/",
    img: gentsImg,
    pin: { x: 44, y: 52 },
  },
  {
    brand: "Cutting Edge Ladies",
    area: "Multiple",
    emirate: "Dubai",
    address: "Multiple destinations across the UAE",
    phone: "+971 50 784 7968",
    hours: "Daily · 10:00 – 22:00",
    mapsHref: "https://cuttingedgeladies.com/",
    img: ladiesImg,
    pin: { x: 48, y: 54 },
  },
  {
    brand: "Deco Vibes",
    area: "Studio",
    emirate: "Dubai",
    address: "Dubai, United Arab Emirates",
    phone: "+971 50 784 7968",
    hours: "Sun – Thu · 09:00 – 18:00",
    mapsHref: "https://decovibesinterior.com/",
    img: decoImg,
    pin: { x: 32, y: 58 },
  },
  {
    brand: "Aanka Constructions",
    area: "Headquarters",
    emirate: "Dubai",
    address: "Dubai, United Arab Emirates",
    phone: "+971 50 784 7968",
    hours: "Sun – Thu · 09:00 – 18:00",
    mapsHref: "https://maps.google.com/?q=Dubai+UAE",
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
