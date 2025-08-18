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
		ariaLabel = 'hand lizard solid',
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
		d="M0 112C0 85.5 21.5 64 48 64l112 0 80 0 46.5 0c36.8 0 71.2 18 92.1 48.2l113.5 164c13 18.7 19.9 41 19.9 63.8l0 12 0 16 0 48c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-13.8L273.9 352 240 352l-80 0-48 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l48 0 80 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-80 0L48 160c-26.5 0-48-21.5-48-48z"
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
@prop ariaLabel = 'hand lizard solid'
@prop ...restProps
-->
