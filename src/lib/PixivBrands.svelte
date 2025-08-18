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
		ariaLabel = 'pixiv brands',
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
		d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm171.5 84c41 0 76.3 12.9 101.4 35.2l0 0c25.2 22.2 39.8 54.1 39.8 88.8c.1 35.3-16.6 66.3-42.4 87c-25.9 20.8-60.6 32.4-98.8 32.4c-43.5 0-83.8-16.1-83.8-16.1v51.8c7.4 2.2 19.7 7 11.9 14.8H104.8c-7.7-7.8 3.6-12.4 12.1-14.8V175.5C97.1 190.9 87 204.3 81.8 214.2c6 19.4-5.3 18.5-5.3 18.5L56 199.7s72.7-83.7 179.5-83.7zm-3.6 222.9c30 0 56-11.3 73.9-29.2c17.9-18.1 27.9-41.6 28-70.2c-.1-29.3-9.5-54.6-26.7-73.6c-17.2-18.9-42.7-31.3-75.2-31.4c-26.7-.1-59.8 9-80.2 23.7V323.1c18.6 9.3 46.8 15.9 80.2 15.8z"
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
@prop ariaLabel = 'pixiv brands'
@prop ...restProps
-->
