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
		ariaLabel = 'stripe s brands',
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
	viewBox="0 0 384 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M155.3 154.6c0-22.3 18.6-30.9 48.4-30.9 43.4 0 98.5 13.3 141.9 36.7V26.1C298.3 7.2 251.1 0 203.8 0 88.1 0 11 60.4 11 161.4c0 157.9 216.8 132.3 216.8 200.4 0 26.4-22.9 34.9-54.7 34.9-47.2 0-108.2-19.5-156.1-45.5v128.5a396.09 396.09 0 0 0 156 32.4c118.6 0 200.3-51 200.3-153.6 0-170.2-218-139.7-218-203.9z"
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
@prop ariaLabel = 'stripe s brands'
@prop ...restProps
-->
