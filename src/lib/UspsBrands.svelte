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
		ariaLabel = 'usps brands',
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
	viewBox="0 0 576 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M460.3 241.7c25.8-41.3 15.2-48.8-11.7-48.8h-27c-.1 0-1.5-1.4-10.9 8-11.2 5.6-37.9 6.3-37.9 8.7 0 4.5 70.3-3.1 88.1 0 9.5 1.5-1.5 20.4-4.4 32-.5 4.5 2.4 2.3 3.8.1zm-112.1 22.6c64-21.3 97.3-23.9 102-26.2 4.4-2.9-4.4-6.6-26.2-5.8-51.7 2.2-137.6 37.1-172.6 53.9l-30.7-93.3h196.6c-2.7-28.2-152.9-22.6-337.9-22.6L27 415.8c196.4-97.3 258.9-130.3 321.2-151.5zM94.7 96c253.3 53.7 330 65.7 332.1 85.2 36.4 0 45.9 0 52.4 6.6 21.1 19.7-14.6 67.7-14.6 67.7-4.4 2.9-406.4 160.2-406.4 160.2h423.1L549 96z"
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
@prop ariaLabel = 'usps brands'
@prop ...restProps
-->
