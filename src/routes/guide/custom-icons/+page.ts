import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Custom icons example - Svelte Awesome Icons',
    description: 'How to create a custom icons with Svelte Awesome Icons',
    og: {
      title: 'Custom icons example - Svelte Awesome Icons',
      description: 'How to create a custom icons with Svelte Awesome Icons'
    },
    twitter: {
      title: 'Custom icons example - Svelte Awesome Icons',
      description: 'How to create a custom icons with Svelte Awesome Icons'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
