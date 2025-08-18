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
		ariaLabel = 'chess rook regular',
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
	viewBox="0 0 448 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M80 80l0 112c0 2.5 1.2 4.9 3.2 6.4l51.2 38.4c6.8 5.1 10.4 13.4 9.5 21.9L133.5 352l-48.3 0 9.4-85L54.4 236.8C40.3 226.2 32 209.6 32 192L32 72c0-22.1 17.9-40 40-40l304 0c22.1 0 40 17.9 40 40l0 120c0 17.6-8.3 34.2-22.4 44.8L353.4 267l9.4 85-48.3 0-10.4-93.3c-.9-8.4 2.7-16.8 9.5-21.9l51.2-38.4c2-1.5 3.2-3.9 3.2-6.4l0-112-64 0 0 24c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-24-64 0 0 24c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-24L80 80zm4.7 384l278.7 0-16.6-32-245.6 0L84.7 464zm271.9-80c12 0 22.9 6.7 28.4 17.3l26.5 51.2c3 5.8 4.6 12.2 4.6 18.7c0 22.5-18.2 40.8-40.8 40.8L72.8 512C50.2 512 32 493.8 32 471.2c0-6.5 1.6-12.9 4.6-18.7l26.5-51.2C68.5 390.7 79.5 384 91.5 384l265 0zM208 288c-8.8 0-16-7.2-16-16l0-48c0-17.7 14.3-32 32-32s32 14.3 32 32l0 48c0 8.8-7.2 16-16 16l-32 0z"
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
@prop ariaLabel = 'chess rook regular'
@prop ...restProps
-->
