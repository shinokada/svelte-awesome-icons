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
		ariaLabel = 'lira sign solid',
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
	viewBox="0 0 320 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M112 160.4c0-35.5 28.8-64.4 64.4-64.4c6.9 0 13.8 1.1 20.4 3.3l81.2 27.1c16.8 5.6 34.9-3.5 40.5-20.2s-3.5-34.9-20.2-40.5L217 38.6c-13.1-4.4-26.8-6.6-40.6-6.6C105.5 32 48 89.5 48 160.4L48 192l-16 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l16 0 0 32-16 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l14 0c-2.2 10.5-6.1 20.6-11.7 29.9L4.6 431.5c-5.9 9.9-6.1 22.2-.4 32.2S20.5 480 32 480l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L88.5 416l.7-1.1c11.6-19.3 18.9-40.7 21.6-62.9L224 352c17.7 0 32-14.3 32-32s-14.3-32-32-32l-112 0 0-32 112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-112 0 0-31.6z"
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
@prop ariaLabel = 'lira sign solid'
@prop ...restProps
-->
