<script lang="ts">
	import { getContext } from 'svelte';
	import type { BaseProps, Props } from './types';

	const ctx: BaseProps = getContext('iconCtx') ?? {};

	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		color = ctx.color || 'currentColor',
		title,
		desc,
		ariaLabel = 'algolia brands',
		...restProps
	}: Props = $props();

	let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
	const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{...restProps}
	{role}
	width={size}
	height={size}
	fill={color}
	aria-label={ariaLabel}
	aria-describedby={hasDescription ? ariaDescribedby : undefined}
	viewBox="0 0 512 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M256 0C116.1 0 2 112.7 0 252.1C-2 393.6 112.9 510.8 254.5 511.6c43.7 .3 85.9-10.4 123.3-30.7c3.6-2 4.2-7 1.1-9.7l-24-21.2c-4.9-4.3-11.8-5.5-17.8-3c-26.1 11.1-54.5 16.8-83.7 16.4C139 461.9 46.5 366.8 48.3 252.4C50.1 139.5 142.6 48.2 256 48.2H463.7V417.2L345.9 312.5c-3.8-3.4-9.7-2.7-12.7 1.3c-18.9 25-49.7 40.6-83.9 38.2c-47.5-3.3-85.9-41.5-89.5-88.9c-4.2-56.6 40.6-103.9 96.3-103.9c50.4 0 91.9 38.8 96.2 88c.4 4.4 2.4 8.5 5.7 11.4l30.7 27.2c3.5 3.1 9 1.2 9.9-3.4c2.2-11.8 3-24.2 2.1-36.8c-4.9-72-63.3-130-135.4-134.4c-82.7-5.1-151.8 59.5-154 140.6c-2.1 78.9 62.6 147 141.6 148.7c33 .7 63.6-9.6 88.3-27.6L495 509.4c6.6 5.8 17 1.2 17-7.7V9.7c0-5.4-4.4-9.7-9.7-9.7H256z"
	/>
</svg>

<!--
@component
[Go to docs](https://svelte-awesome-icons.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop title
@prop desc
@prop ariaLabel = 'algolia brands'
@prop ...restProps
-->
