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
		ariaLabel = 'gopuram solid',
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
		d="M120 0c13.3 0 24 10.7 24 24l0 8 40 0 0-8c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8 48 0 0-8c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8 40 0 0-8c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8 0 32 0 64c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32l0 96c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-64 0 0-160-32 0 0-128-32 0 0-96-32 0 0 96 32 0 0 128 32 0 0 160-80 0 0-48c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 48-80 0 0-160 32 0 0-128 32 0 0-96-32 0 0 96-32 0 0 128-32 0 0 160-64 0c-17.7 0-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32l0-96c0-17.7 14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l0-64 0-32 0-8c0-13.3 10.7-24 24-24zM256 272c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-32-80l0 32 64 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32z"
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
@prop ariaLabel = 'gopuram solid'
@prop ...restProps
-->
