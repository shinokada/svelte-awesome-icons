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
		ariaLabel = 'code compare solid',
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
		d="M320 488c0 9.5-5.6 18.1-14.2 21.9s-18.8 2.3-25.8-4.1l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c7-6.3 17.2-7.9 25.8-4.1s14.2 12.4 14.2 21.9l0 40 16 0c35.3 0 64-28.7 64-64l0-166.7C371.7 141 352 112.8 352 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3L464 320c0 70.7-57.3 128-128 128l-16 0 0 40zM456 80a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM192 24c0-9.5 5.6-18.1 14.2-21.9s18.8-2.3 25.8 4.1l80 72c5.1 4.6 7.9 11 7.9 17.8s-2.9 13.3-7.9 17.8l-80 72c-7 6.3-17.2 7.9-25.8 4.1s-14.2-12.4-14.2-21.9l0-40-16 0c-35.3 0-64 28.7-64 64l0 166.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3L48 192c0-70.7 57.3-128 128-128l16 0 0-40zM56 432a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z"
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
@prop ariaLabel = 'code compare solid'
@prop ...restProps
-->
