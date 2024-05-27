import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Setting Global Icon - Svelte Awesome Icons',
    description: 'Setting Global Icon using setContext with Svelte Awesome Icons',
    og: {
      title: 'Setting Global Icon - Svelte Awesome Icons',
      description: 'Setting Global Icon using setContext with Svelte Awesome Icons'
    },
    twitter: {
      title: 'Setting Global Icon - Svelte Awesome Icons',
      description: 'Setting Global Icon using setContext with Svelte Awesome Icons'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
