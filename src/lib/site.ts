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
  description: "Three moments. One system. AMPL is almost ready — stay close.",
  headline: {
    line1: "Something’s",
    line2: "charging.",
  },
  subhead: "Three moments. One system. AMPL is almost ready — stay close.",
} as const;

export const links: SocialLink[] = [
  { label: "Linktree", href: "https://linktr.ee/stayampl" },
  { label: "Instagram", href: "https://www.instagram.com/stayampl" },
  { label: "TikTok", href: "https://www.tiktok.com/@stayampl" },
];
