// Zaika
import zaikaStorefront from "@/assets/brands/zaika/storefront.webp";
import zaikaCounter from "@/assets/brands/zaika/counter.webp";
import zaikaSign from "@/assets/brands/zaika/sign.png";
import zaikaTeam from "@/assets/brands/zaika/team.jpg";
import zaikaFood1 from "@/assets/brands/zaika/food-1.png";
import zaikaFood2 from "@/assets/brands/zaika/food-2.png";

// Khau Galli
import khauStorefront from "@/assets/brands/khau/storefront.jpg";
import khauStore2 from "@/assets/brands/khau/store-2.jpg";
import khauStore3 from "@/assets/brands/khau/store-3.jpg";
import khauFood1 from "@/assets/brands/khau/food-1.jpg";
import khauFood2 from "@/assets/brands/khau/food-2.jpg";
import khauFood3 from "@/assets/brands/khau/food-3.jpg";
import khauFood4 from "@/assets/brands/khau/food-4.jpg";

// CEL
import celSalon from "@/assets/brands/cel/salon.jpg";
import celStorefront from "@/assets/brands/cel/storefront.png";
import celInterior1 from "@/assets/brands/cel/interior-1.png";
import celInterior2 from "@/assets/brands/cel/interior-2.png";
import celInterior3 from "@/assets/brands/cel/interior-3.png";

// CEM
import cemStorefront from "@/assets/brands/cem/storefront.jpg";
import cemTeam1 from "@/assets/brands/cem/team-1.jpg";
import cemTeam2 from "@/assets/brands/cem/team-2.jpg";
import cemInterior1 from "@/assets/brands/cem/interior-1.jpg";
import cemInterior2 from "@/assets/brands/cem/interior-2.jpg";
import cemStore2 from "@/assets/brands/cem/store-2.jpg";

// Deco
import decoCorridor from "@/assets/brands/deco/corridor.jpg";
import decoBedroom from "@/assets/brands/deco/bedroom.jpg";
import decoWardrobe from "@/assets/brands/deco/wardrobe.jpg";
import decoProject1 from "@/assets/brands/deco/project-1.jpg";
import decoOffice1 from "@/assets/brands/deco/office-1.jpg";
import decoOffice2 from "@/assets/brands/deco/office-2.jpg";

import constImg from "@/assets/brand-construction.jpg";

export type Brand = {
  num: string;
  slug: string;
  name: string;
  sector: string;
  desc: string;
  longDesc: string;
  img: string;
  gallery: string[];
  locations: string[];
  href?: string;
  span: string;
  franchisable: boolean;
  investmentRange?: string;
};

export const brands: Brand[] = [
  {
    num: "01",
    slug: "khau-galli",
    name: "Khau Galli",
    sector: "Hospitality",
    desc: "A vibrant food concept built around flavour, familiarity and the comfort of being welcomed back.",
    longDesc:
      "Khau Galli celebrates India's beloved street-food culture for the modern UAE diner. From small plates to shared platters, every dish carries warmth, spice and memory — served in a setting that feels familiar, joyful and genuinely welcoming.",
    img: khauStorefront,
    gallery: [khauStorefront, khauStore2, khauStore3, khauFood1, khauFood2, khauFood3, khauFood4],
    locations: ["JLT, Dubai", "Ibn Battuta Mall", "DSO", "Deira CC", "Al Quoz", "Mega Mall, Sharjah"],
    href: "https://thekhaugalli.com/",
    span: "lg:col-span-8 lg:row-span-2",
    franchisable: true,
    investmentRange: "AED 1.5M – 3M",
  },
  {
    num: "02",
    slug: "house-of-zaika",
    name: "House of Zaika",
    sector: "Hospitality",
    desc: "A Mughlai dining experience rooted in richness, warmth and generous hospitality.",
    longDesc:
      "House of Zaika is a refined Mughlai dining destination built around slow-cooked richness, generous hospitality and the details that turn a meal into a memory. It is designed for guests who value care in both kitchen and atmosphere.",
    img: zaikaStorefront,
    gallery: [zaikaStorefront, zaikaCounter, zaikaSign, zaikaTeam, zaikaFood1, zaikaFood2],
    locations: ["Ibn Battuta Mall, Dubai"],
    href: "https://houseofzaika.com/",
    span: "lg:col-span-4",
    franchisable: true,
    investmentRange: "AED 2M – 4M",
  },
  {
    num: "03",
    slug: "cutting-edge-gents",
    name: "Cutting Edge Gents",
    sector: "Wellness · Grooming",
    desc: "A modern grooming destination where precision, comfort and trust matter.",
    longDesc:
      "Cutting Edge Gents is a contemporary grooming house built around precision, personalisation and the quiet confidence of a great cut. Every chair is shaped around comfort, consistency and the trust customers place in their barber.",
    img: cemStorefront,
    gallery: [cemStorefront, cemInterior1, cemInterior2, cemStore2, cemTeam1, cemTeam2],
    locations: ["IBN", "JLT (×3)", "DSO"],
    href: "https://cuttingedgemens.com/",
    span: "lg:col-span-4",
    franchisable: true,
    investmentRange: "AED 600K – 1.2M",
  },
  {
    num: "04",
    slug: "cutting-edge-ladies",
    name: "Cutting Edge Ladies",
    sector: "Beauty · Wellness",
    desc: "A beauty and self-care brand shaped around care, confidence and comfort.",
    longDesc:
      "Cutting Edge Ladies is a beauty and wellness destination shaped around modern self-care. Hair, skin, nails and bridal services are delivered with warmth, expertise and the kind of attention that makes every appointment feel personal.",
    img: celSalon,
    gallery: [celSalon, celStorefront, celInterior1, celInterior2, celInterior3],
    locations: ["IBN", "JLT", "Dubai Marina", "DSO", "Mega Mall, Sharjah"],
    href: "https://cuttingedgeladies.com/",
    span: "lg:col-span-4",
    franchisable: true,
    investmentRange: "AED 700K – 1.3M",
  },
  {
    num: "05",
    slug: "deco-vibes",
    name: "Deco Vibes",
    sector: "Interiors",
    desc: "Interior solutions shaped by detail, functionality and a real understanding of how people use space.",
    longDesc:
      "Deco Vibes is an interiors and fit-out studio that brings together practical thinking and a feel for atmosphere. Residential, hospitality and commercial projects are shaped end-to-end with care, from concept through delivery.",
    img: decoCorridor,
    gallery: [decoCorridor, decoBedroom, decoWardrobe, decoProject1, decoOffice1, decoOffice2],
    locations: ["Dubai Investment Park 2, Dubai"],
    href: "https://decovibesinterior.com/",
    span: "lg:col-span-4",
    franchisable: false,
  },
  {
    num: "06",
    slug: "aanka-constructions",
    name: "Aanka Constructions",
    sector: "Construction",
    desc: "A construction business focused on dependable execution, quality and long-term relationships.",
    longDesc:
      "Aanka Constructions delivers commercial and residential projects across Dubai and Sharjah with a focus on dependable execution, structural quality and trust. The work is quietly rigorous, carefully managed and built for long-term value.",
    img: constImg,
    gallery: [constImg],
    locations: ["Dubai", "Sharjah"],
    href: "https://aankacontracting.com/",
    span: "lg:col-span-4",
    franchisable: false,
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
