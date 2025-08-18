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
		ariaLabel = 'creative commons nc jp brands',
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
	viewBox="0 0 496 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M247.7 8C103.6 8 0 124.8 0 256c0 136.4 111.8 248 247.7 248C377.9 504 496 403.2 496 256 496 117.2 388.5 8 247.7 8zm.6 450.7c-112 0-203.6-92.5-203.6-202.7 0-21.1 3-41.2 9-60.3l127 56.5h-27.9v38.6h58.1l5.7 11.8v18.7h-63.8V360h63.8v56h61.7v-56h64.2v-35.7l81 36.1c-1.5 2.2-57.1 98.3-175.2 98.3zm87.6-137.3h-57.6v-18.7l2.9-5.6 54.7 24.3zm6.5-51.4v-17.8h-38.6l63-116H301l-43.4 96-23-10.2-39.6-85.7h-65.8l27.3 51-81.9-36.5c27.8-44.1 82.6-98.1 173.7-98.1 112.8 0 203 90 203 203.4 0 21-2.7 40.6-7.9 59l-101-45.1z"
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
@prop ariaLabel = 'creative commons nc jp brands'
@prop ...restProps
-->
