import khauImg from "@/assets/brands/khau-galli.jpg";
import zaikaImg from "@/assets/brands/zaika.jpg";
import gentsImg from "@/assets/brands/gents.webp";
import ladiesImg from "@/assets/brands/ladies.jpg";
import decoImg from "@/assets/brands/deco.jpg";
import constImg from "@/assets/brand-construction.jpg";

export type Brand = {
  num: string;
  name: string;
  sector: string;
  desc: string;
  img: string;
  href?: string;
  span: string;
};

export const brands: Brand[] = [
  {
    num: "01",
    name: "Khau Galli",
    sector: "Food & Beverage",
    desc: "A vibrant food concept serving flavour, familiarity, and comfort.",
    img: khauImg,
    href: "https://thekhaugalli.com/",
    span: "lg:col-span-8 lg:row-span-2",
  },
  {
    num: "02",
    name: "House of Zaika",
    sector: "Fine Dining",
    desc: "A Mughlai dining experience rooted in richness, warmth, and memorable taste.",
    img: zaikaImg,
    href: "https://houseofzaika.com/",
    span: "lg:col-span-4",
  },
  {
    num: "03",
    name: "Cutting Edge Gents",
    sector: "Wellness · Grooming",
    desc: "A modern grooming destination designed for the contemporary gentleman.",
    img: gentsImg,
    href: "https://cuttingedgemens.com/",
    span: "lg:col-span-4",
  },
  {
    num: "04",
    name: "Cutting Edge Ladies",
    sector: "Beauty · Wellness",
    desc: "A beauty and self-care brand created for today's confident woman.",
    img: ladiesImg,
    href: "https://cuttingedgeladies.com/",
    span: "lg:col-span-4",
  },
  {
    num: "05",
    name: "Deco Vibes",
    sector: "Interior Design",
    desc: "Interior solutions shaped by design, detail, and functionality.",
    img: decoImg,
    href: "https://decovibesinterior.com/",
    span: "lg:col-span-4",
  },
  {
    num: "06",
    name: "Aanka Constructions",
    sector: "Construction",
    desc: "A construction business focused on dependable execution and long-term value.",
    img: constImg,
    span: "lg:col-span-4",
  },
];
