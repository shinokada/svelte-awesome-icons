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
		ariaLabel = 'vector square solid',
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
		d="M368 80l32 0 0 32-32 0 0-32zM352 32c-17.7 0-32 14.3-32 32L128 64c0-17.7-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64l0 64c0 17.7 14.3 32 32 32l0 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l192 0c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-192c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0zM96 160c17.7 0 32-14.3 32-32l192 0c0 17.7 14.3 32 32 32l0 192c-17.7 0-32 14.3-32 32l-192 0c0-17.7-14.3-32-32-32l0-192zM48 400l32 0 0 32-32 0 0-32zm320 32l0-32 32 0 0 32-32 0zM48 112l0-32 32 0 0 32-32 0z"
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
@prop ariaLabel = 'vector square solid'
@prop ...restProps
-->
