import type { MetaProps } from 'runes-meta-tags';

const title = 'Getting Started - Svelte Awesome Icons v2'
const description = 'How to get started with Svelte Awesome Icons v2'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-awesome-icons'

export const load = ({ url }) => {
  const pageMetaTags = Object.freeze({
    title,
    description,
    og: {
      title,
      description,
      image: imgUrl
    },
    twitter: {
      title,
      description,
      image: imgUrl
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
