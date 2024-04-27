import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Svelte 5 Getting started - Svelte Awesome Icons',
    description: 'Svelte 5 Getting started',
    og: {
      title: 'Svelte 5 Getting started - Svelte Awesome Icons',
      description: 'Svelte 5 Getting started',
    },
    twitter: {
      title: 'Svelte 5 Getting started - Svelte Awesome Icons',
      description: 'Svelte 5 Getting started',
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
