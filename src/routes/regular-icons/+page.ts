import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Regular Icons - Svelte Awesome Icons',
    description: 'Regular Icons from Font-Awesome for Svelte',
    og: {
      title: 'Regular Icons - Svelte Awesome Icons',
      description: 'Regular Icons from Font-Awesome for Svelte',
    },
    twitter: {
      title: 'Regular Icons - Svelte Awesome Icons',
      description: 'Regular Icons from Font-Awesome for Svelte',
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
