import { Metadata } from 'next';

export const siteConfig = {
  name: 'CalcVerse AI',
  description: 'The world\'s most advanced AI-powered calculator ecosystem. Interconnected calculators with AI explanations and dynamic visualizations.',
  url: 'https://calcverse.ai',
  ogImage: 'https://calcverse.ai/og-image.png',
  links: {
    twitter: 'https://twitter.com/calcverse',
    github: 'https://github.com/calcverse/platform',
  },
};

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@calcverse',
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
