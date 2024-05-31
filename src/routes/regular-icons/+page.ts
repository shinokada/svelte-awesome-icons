import type { MetaProps } from 'runes-meta-tags';

const title = 'Regular Icons - Svelte Awesome Icons'
const description = 'Easily Find & Copy SVG Icon name for Your Project'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-awesome-icons'
const ogUrl = 'http://localhost:4173/regular-icons'

export const load = ({ url }) => {
  const pageMetaTags = Object.freeze({
    title,
    description,
    og: {
      title,
      description,
      image: imgUrl,
      url: ogUrl
    },
    twitter: {
      title,
      description,
      image: imgUrl
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
