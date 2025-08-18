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
		ariaLabel = 'mars stroke right solid',
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
	viewBox="0 0 640 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M208 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm174.4-88C370.7 365.8 297.1 432 208 432c-97.2 0-176-78.8-176-176s78.8-176 176-176c89.1 0 162.7 66.2 174.4 152l33.6 0 0-56c0-13.3 10.7-24 24-24s24 10.7 24 24l0 56 32 0 0-56c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2l0-56-32 0 0 56c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-56-33.6 0z"
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
@prop ariaLabel = 'mars stroke right solid'
@prop ...restProps
-->
