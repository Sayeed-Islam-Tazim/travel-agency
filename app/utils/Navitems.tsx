import {
  FaCcVisa,
  FaGifts,
  FaHotel,
  FaMobileScreen,
  FaMoneyBillTransfer,
  FaPlane,
  FaShop,
  FaTree,
} from "react-icons/fa6";

export const components: {
  id: string;
  title: string;
  href?: string;
  children?: {
    id: string;
    title: string;
    href: string;
    description?: string;
  }[];
}[] = [
  {
    id: "1",
    title: "Flight",
    href: "/docs/primitives/alert-dialog",
    children: [],
  },
  {
    id: "2",
    title: "Hotel",
    href: "/docs/primitives/alert-dialog",
    children: [],
  },
  {
    id: "3",
    title: "Shop",
    href: "/docs/primitives/alert-dialog",
    children: [],
  },
  {
    id: "4",
    title: "Holiday",
    href: "/docs/primitives/alert-dialog",
    children: [],
  },
  {
    id: "5",
    title: "Visa",
    children: [
      {
        id: "501",
        title: "Visa Application",
        href: "/",
        description: "oadsnf asdjfn asdoi",
      },
      {
        id: "502",
        title: "Visa Guide",
        href: "/as",
        description: "oadsnf asdjfn asdoi asfddasfg",
      },
      {
        id: "503",
        title: "Transit Visa",
        href: "/as",
        description: "oadsnf asdjfn asdoi asfddasfg",
      },
    ],
  },
  {
    id: "6",
    title: "Pormotions",
    href: "/docs/primitives/alert-dialog",
    children: [],
  },
  {
    id: "7",
    title: "Medical Tourism",
    href: "/docs/primitives/alert-dialog",
    children: [],
  },
  {
    id: "8",
    title: "Others",
    children: [
      {
        id: "801",
        title: "About",
        href: "/",
        description: "oadsnf asdjfn asdoi",
      },
      {
        id: "802",
        title: "Skytrip",
        href: "/as",
        description: "oadsnf asdjfn asdoi asfddasfg",
      },
      {
        id: "803",
        title: "Stellar Card",
        href: "/as",
        description: "oadsnf asdjfn asdoi asfddasfg",
      },
      {
        id: "804",
        title: "ST-Ads",
        href: "/",
        description: "oadsnf asdjfn asdoi",
      },
      {
        id: "805",
        title: "Saudi Tourism",
        href: "/as",
        description: "oadsnf asdjfn asdoi asfddasfg",
      },
      {
        id: "806",
        title: "Why us?",
        href: "/as",
        description: "oadsnf asdjfn asdoi asfddasfg",
      },
      {
        id: "807",
        title: "Travel Guide",
        href: "/",
        description: "oadsnf asdjfn asdoi",
      },
      {
        id: "808",
        title: "News",
        href: "/as",
        description: "oadsnf asdjfn asdoi asfddasfg",
      },
      {
        id: "809",
        title: "FAQs & Support",
        href: "/as",
        description: "oadsnf asdjfn asdoi asfddasfg",
      },
      {
        id: "810",
        title: "Business Class",
        href: "/",
        description: "oadsnf asdjfn asdoi",
      },
    ],
  },
];

export const tabItems: {
  id: string;
  name: string;
  icon: unknown;
}[] = [
  {
    id: "1",
    name: "Flight",
    icon: <FaPlane />,
  },
  {
    id: "2",
    name: "Hotel",
    icon: <FaHotel />,
  },
  {
    id: "3",
    name: "Shop",
    icon: <FaShop />,
  },
  {
    id: "4",
    name: "Holiday",
    icon: <FaTree />,
  },
  {
    id: "5",
    name: "Visa",
    icon: <FaCcVisa />,
  },
  {
    id: "6",
    name: "Mobile Recharge",
    icon: <FaMobileScreen />,
  },
  {
    id: "7",
    name: "Pay Bill",
    icon: <FaMoneyBillTransfer />,
  },
  {
    id: "8",
    name: "Gift Card",
    icon: <FaGifts />,
  },
];

export const tripOption: {
  id: string;
  name: string;
}[] = [
  {
    id: "1",
    name: "One Way",
  },
  {
    id: "2",
    name: "Round Trip",
  },
  {
    id: "3",
    name: "Multi City",
  },
];

export const fareOptions: {
  id: string;
  name: string;
}[] = [
  {
    id: "1",
    name: "Regular Fare",
  },
  {
    id: "2",
    name: "Student Fare",
  },
  {
    id: "3",
    name: "Umrah Fare",
  },
];

export const classOptions: {
  id: string;
  name: string;
}[] = [
  {
    id: "1",
    name: "Premium Economy",
  },
  {
    id: "2",
    name: "Economy",
  },
  {
    id: "3",
    name: "Business",
  },
  {
    id: "4",
    name: "First Class",
  },
];

export const travellersDetails: {
  key: string;
  label: string;
  subtitle: string;
}[] = [
  {
    key: "adults",
    label: "Adults",
    subtitle: "12 years & above",
  },
  {
    key: "children",
    label: "Children",
    subtitle: "5 to under 12",
  },
  {
    key: "kids",
    label: "Kids",
    subtitle: "2 to under 5",
  },
  {
    key: "infants",
    label: "Infants",
    subtitle: "Under 2 years",
  },
];

export const cityOptions: {
  id: string;
  name: string;
  shortForm: string;
  airport: string;
}[] = [
  {
    id: "1",
    name: "Dhaka",
    shortForm: "DAC",
    airport: "Bangladesh, Hazrat Shahjalal International Airport",
  },
  {
    id: "2",
    name: "Cox's Bazar",
    shortForm: "CXB",
    airport: "Bangladesh, Cox's Bazar Airport",
  },
  {
    id: "3",
    name: "Chittagong",
    shortForm: "CGP",
    airport: "Bangladesh, Shah Amanat International Airport",
  },
  {
    id: "4",
    name: "New York",
    shortForm: "JFK",
    airport: "United States, John F. Kennedy International Airport",
  },
];

export const offers: {
  key: string;
  src: string;
  title: string;
  desc: string;
}[] = [
  {
    key: "1",
    src: "/assets/offers/offer-1.jpg",
    title: "Save upto 10% on Flight Booking",
    desc: "Up to 15% discount on the base fare of domestic flights",
  },
  {
    key: "2",
    src: "/assets/offers/offer-2.jpg",
    title: "Save upto 10% on Flight Booking",
    desc: "Up to 15% discount on the base fare of domestic flights",
  },
  {
    key: "3",
    src: "/assets/offers/offer-3.jpg",
    title: "Save upto 10% on Flight Booking",
    desc: "Up to 15% discount on the base fare of domestic flights",
  },
  {
    key: "4",
    src: "/assets/offers/offer-4.jpg",
    title: "Save upto 10% on Flight Booking",
    desc: "Up to 15% discount on the base fare of domestic flights",
  },
  {
    key: "5",
    src: "/assets/offers/offer-5.jpg",
    title: "Save upto 10% on Flight Booking",
    desc: "Up to 15% discount on the base fare of domestic flights",
  },
];

// module.exports = { components, tabItems };
