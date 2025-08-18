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
		ariaLabel = 'icicles solid',
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
		d="M75.8 304.8L1 35.7c-.7-2.5-1-5-1-7.5C0 12.6 12.6 0 28.2 0H482.4C498.8 0 512 13.2 512 29.6c0 1.6-.1 3.3-.4 4.9L434.6 496.1c-1.5 9.2-9.5 15.9-18.8 15.9c-9.2 0-17.1-6.6-18.7-15.6L336 160 307.2 303.9c-1.9 9.3-10.1 16.1-19.6 16.1c-9.2 0-17.2-6.2-19.4-15.1L240 192 210.6 368.2c-1.5 9.1-9.4 15.8-18.6 15.8s-17.1-6.7-18.6-15.8L144 192 115.9 304.3c-2.3 9.2-10.6 15.7-20.1 15.7c-9.3 0-17.5-6.2-20-15.2z"
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
@prop ariaLabel = 'icicles solid'
@prop ...restProps
-->
