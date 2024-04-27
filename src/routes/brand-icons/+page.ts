import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Brand icons - Svelte Awesome Icons',
    description: 'Brand icons from Font-Awesome for Svelte',
    og: {
      title: 'Brand icons - Svelte Awesome Icons',
      description: 'Brand icons from Font-Awesome for Svelte',
    },
    twitter: {
      title: 'Brand icons - Svelte Awesome Icons',
      description: 'Brand icons from Font-Awesome for Svelte',
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
