// ---------------------------------------------------------------------------
// All salon content lives here so it is trivial to hand off / edit later.
// Photos are Unsplash placeholders — swap the URLs for real studio photos.
// ---------------------------------------------------------------------------

/**
 * Where the "Book now" buttons point. For the demo this dials the salon
 * directly (works on any phone). Replace with the real Google Form link
 * (the "Appointments: forms.gle" link on their Google listing) when you have it.
 */
export const BOOKING_URL = "tel:+918779298271";

export const salon = {
  name: "Blush by Bushra Imtiyaz",
  shortName: "Blush",
  tagline: "Salon & Studio",
  heroBlurb:
    "A beauty studio in Byculla where the work is precise, the room is spotless and nobody rushes you out the door.",
  area: "Byculla · Mumbai",
  phoneDisplay: "087792 98271",
  phoneHref: "tel:+918779298271",
  address: {
    line1: "Helal Building, 'B' Block, Shop No. 4",
    line2: "Rambhau Bhogle Marg, Byculla",
    city: "Mumbai",
    state: "Maharashtra",
    zip: "400010",
  },
  hours: "Open daily · until 10 PM",
  rating: 4.6,
  reviewCount: 323,
  googleUrl: "https://www.google.com/maps/search/?api=1&query=Blush+by+Bushra+Imtiyaz+Salon+Byculla+Mumbai",
  mapEmbed:
    "https://www.google.com/maps?q=Blush%20by%20Bushra%20Imtiyaz%20Salon%20%26%20Studio%20Byculla%20Mumbai&output=embed",
  instagramUrl: "https://instagram.com/",
};

export const heroImage =
  "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=2070&q=85";

export const about = {
  images: [
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
  ],
  body: [
    "Blush is run by Bushra Imtiyaz — a small, senior team that has been looking after Byculla's regulars for years.",
    "Facials, hair, colour, bridal and party looks, threading, waxing, nails and mehndi. One booking, one calm afternoon, done properly.",
  ],
};

export type Service = {
  name: string;
  desc: string;
  price: string;
  image: string;
};

export const services: Service[] = [
  {
    name: "Facials & Skin",
    desc: "Clean-ups, brightening and hydrating facials tailored to your skin.",
    price: "from ₹800",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hair Styling",
    desc: "Cuts, blow-dries and finishing for every length and texture.",
    price: "from ₹500",
    image:
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hair Spa & Treatments",
    desc: "Deep-conditioning, keratin and smoothening for tired hair.",
    price: "from ₹1,200",
    image:
      "https://images.unsplash.com/photo-1522337094846-8a818192de1f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Colour",
    desc: "Global colour, highlights, root touch-ups and grey coverage.",
    price: "from ₹1,500",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Bridal & Party Makeup",
    desc: "HD and airbrush looks for the bride and the whole party.",
    price: "on request",
    image:
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Threading & Waxing",
    desc: "Brows, face and full-body waxing with gentle products.",
    price: "from ₹40",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Manicure & Pedicure",
    desc: "Classic and spa hand and foot care, with polish or gel.",
    price: "from ₹400",
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mehndi",
    desc: "Bridal and occasion henna, booked ahead for the big days.",
    price: "on request",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80",
  },
];

export const gallery = [
  "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80",
];

export type Review = {
  quote: string;
  name: string;
  detail: string;
  rating: number;
};

// ⚠️  The first two are REAL quotes from the Google listing.
//     The remaining four are PLACEHOLDER copy for the demo — replace them
//     with real Google reviews before this site goes live.
export const reviews: Review[] = [
  {
    quote:
      "The staff was friendly, the place was clean, and the service was top-notch.",
    name: "Munazza Khan",
    detail: "Google review",
    rating: 5,
  },
  {
    quote:
      "Facial was done very good. Shabina was very good at her job — a genuinely relaxing experience.",
    name: "Zainab Bookwala",
    detail: "Google review",
    rating: 5,
  },
  {
    quote:
      "Got my bridal trial done here and booked them on the spot. They actually listen to what you want instead of doing their own thing.",
    name: "Ayesha S.",
    detail: "Google review",
    rating: 5,
  },
  {
    quote:
      "Been coming for threading and hair spa for over a year now. Never rushed, always neat, and the same familiar faces every time.",
    name: "Priya M.",
    detail: "Google review",
    rating: 5,
  },
  {
    quote:
      "Calm little studio right in Byculla. Easy to book through the form and they stick to the appointment time.",
    name: "Fatima R.",
    detail: "Google review",
    rating: 4,
  },
  {
    quote:
      "My hair colour came out exactly like the reference photo I brought. Hard to find that around here.",
    name: "Sana K.",
    detail: "Google review",
    rating: 5,
  },
];
