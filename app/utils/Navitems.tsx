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

// module.exports = { components, tabItems };
