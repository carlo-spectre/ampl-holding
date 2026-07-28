export type SocialLink = {
  label: string;
  href: string;
};

/**
 * Site copy + outbound links for the holding page.
 */
export const site = {
  name: "AMPL",
  domain: "stayampl.com",
  title: "AMPL — Coming Soon",
  description:
    "Stay Loud. Stay Healthy, Stay AMPL — Enjoy the Moment, Protect Your Morning.",
  headline: {
    line1: "Something’s",
    line2: "charging.",
  },
  subhead: "Stay Loud. Stay Healthy, Stay AMPL\nEnjoy the Moment, Protect Your Morning.",
} as const;

export const links: SocialLink[] = [
  { label: "Linktree", href: "https://linktr.ee/stayampl" },
  { label: "Instagram", href: "https://www.instagram.com/stayampl" },
  { label: "TikTok", href: "https://www.tiktok.com/@stayampl" },
];
