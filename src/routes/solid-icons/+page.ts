import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Solid Icons - Svelte Awesome Icons',
    description: 'Solid Icons from Font-Awesome for Svelte',
    og: {
      title: 'Solid Icons - Svelte Awesome Icons',
      description: 'Solid Icons from Font-Awesome for Svelte',
    },
    twitter: {
      title: 'Solid Icons - Svelte Awesome Icons',
      description: 'Solid Icons from Font-Awesome for Svelte',
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
