import type { MetaProps } from 'runes-meta-tags';
const title = 'Custom icons - Svelte Awesome Icons';
const description = 'How to create a custom icons with Svelte Awesome Icons';
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
