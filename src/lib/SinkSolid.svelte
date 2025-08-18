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
		ariaLabel = 'sink solid',
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
		d="M288 96c0-17.7 14.3-32 32-32s32 14.3 32 32s14.3 32 32 32s32-14.3 32-32c0-53-43-96-96-96s-96 43-96 96l0 192-64 0 0-24c0-30.9-25.1-56-56-56l-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c4.4 0 8 3.6 8 8l0 24-80 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l224 0 224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-80 0 0-24c0-4.4 3.6-8 8-8l56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0c-30.9 0-56 25.1-56 56l0 24-64 0 0-192zM480 416l0-32L32 384l0 32c0 53 43 96 96 96l256 0c53 0 96-43 96-96z"
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
@prop ariaLabel = 'sink solid'
@prop ...restProps
-->
