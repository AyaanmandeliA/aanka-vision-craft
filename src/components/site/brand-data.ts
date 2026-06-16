import khauImg from "@/assets/brands/khau-galli.jpg";
import khauThali from "@/assets/brands/khau-thali.jpg";
import zaikaImg from "@/assets/brands/zaika.jpg";
import zaika2 from "@/assets/brands/zaika-2.jpg";
import zaikaInterior from "@/assets/brands/zaika-interior.jpg";
import gentsImg from "@/assets/brands/gents.webp";
import gents2 from "@/assets/brands/gents-2.webp";
import ladiesImg from "@/assets/brands/ladies.jpg";
import ladies2 from "@/assets/brands/ladies-2.jpg";
import decoImg from "@/assets/brands/deco.jpg";
import deco2 from "@/assets/brands/deco-2.jpg";
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
    sector: "Food & Beverage",
    desc: "A vibrant food concept serving flavour, familiarity, and comfort.",
    longDesc:
      "Khau Galli is a celebration of India's beloved street-food culture, reimagined for the modern UAE diner. From small plates to shared platters, every dish carries the warmth, spice, and memory of a city's most-loved corners — served in a setting that feels familiar, joyful, and unmistakably ours.",
    img: khauImg,
    gallery: [khauImg, khauThali],
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
    sector: "Fine Dining",
    desc: "A Mughlai dining experience rooted in richness, warmth, and memorable taste.",
    longDesc:
      "House of Zaika is a refined Mughlai dining destination — an evening of slow-cooked richness, generous hospitality, and the kind of detail that turns a meal into a memory. Designed for guests who value craftsmanship in both kitchen and atmosphere.",
    img: zaikaImg,
    gallery: [zaikaImg, zaika2, zaikaInterior],
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
    desc: "A modern grooming destination designed for the contemporary gentleman.",
    longDesc:
      "Cutting Edge Gents is a contemporary grooming house built around precision, personalisation, and the quiet confidence of a great cut. From classic services to modern signatures, every chair offers an experience tailored to today's gentleman.",
    img: gentsImg,
    gallery: [gentsImg, gents2],
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
    desc: "A beauty and self-care brand created for today's confident woman.",
    longDesc:
      "Cutting Edge Ladies is a beauty and wellness sanctuary shaped around modern self-care. Hair, skin, nails, and bridal — every service is delivered with the warmth and expertise that turn appointments into rituals.",
    img: ladiesImg,
    gallery: [ladiesImg, ladies2],
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
    sector: "Interior Design",
    desc: "Interior solutions shaped by design, detail, and functionality.",
    longDesc:
      "Deco Vibes is an interior design and fit-out studio that brings together architectural rigour and a feel for atmosphere. Residential, hospitality, and commercial — each project is shaped end-to-end, from concept through delivery.",
    img: decoImg,
    gallery: [decoImg, deco2],
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
    desc: "A construction business focused on dependable execution and long-term value.",
    longDesc:
      "Aanka Constructions delivers commercial and residential projects across Dubai and Sharjah with a focus on dependable execution, structural quality, and long-term value. Quietly rigorous, transparently managed.",
    img: constImg,
    gallery: [constImg],
    locations: ["Dubai", "Sharjah"],
    span: "lg:col-span-4",
    franchisable: false,
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
