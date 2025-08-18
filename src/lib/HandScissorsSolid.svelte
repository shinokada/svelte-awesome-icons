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
		ariaLabel = 'hand scissors solid',
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
		d="M40 208c-22.1 0-40 17.9-40 40s17.9 40 40 40l180.2 0c-7.6 8.5-12.2 19.7-12.2 32c0 25.3 19.5 46 44.3 47.9c-7.7 8.5-12.3 19.8-12.3 32.1c0 26.5 21.5 48 48 48l32 0 64 0c70.7 0 128-57.3 128-128l0-113.1c0-40.2-16-78.8-44.4-107.3C444.8 76.8 413.9 64 381.7 64L336 64c-21.3 0-39.3 13.9-45.6 33.1l74.5 23.7c8.4 2.7 13.1 11.7 10.4 20.1s-11.7 13.1-20.1 10.4L288 129.9c0 0 0 .1 0 .1L84 65.8C62.9 59.2 40.5 70.9 33.8 92s5.1 43.5 26.2 50.2L269.5 208 40 208z"
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
@prop ariaLabel = 'hand scissors solid'
@prop ...restProps
-->
