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
		ariaLabel = 'bottle droplet solid',
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
		d="M96 0C82.7 0 72 10.7 72 24s10.7 24 24 24c4.4 0 8 3.6 8 8l0 64.9c0 12.2-7.2 23.1-17.2 30.1C53.7 174.1 32 212.5 32 256l0 192c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-192c0-43.5-21.7-81.9-54.8-105c-10-7-17.2-17.9-17.2-30.1L216 56c0-4.4 3.6-8 8-8c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0s0 0 0 0s0 0 0 0L104 0s0 0 0 0s0 0 0 0L96 0zm64 382c-26.5 0-48-20.1-48-45c0-16.8 22.1-48.1 36.3-66.4c6-7.8 17.5-7.8 23.5 0C185.9 288.9 208 320.2 208 337c0 24.9-21.5 45-48 45z"
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
@prop ariaLabel = 'bottle droplet solid'
@prop ...restProps
-->
