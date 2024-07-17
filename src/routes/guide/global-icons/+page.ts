import type { MetaProps } from 'runes-meta-tags';
const title = 'Setting Global Icon - Svelte Awesome Icons';
const description = 'How to create a global icon using setContext with Svelte Awesome Icons';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-awesome-icons';
export const load = () => {
  const pageMetaTags: MetaProps = {
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
  };
  return { pageMetaTags };
};
