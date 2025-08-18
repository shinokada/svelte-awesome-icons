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
		ariaLabel = 'envelopes bulk solid',
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
		d="M128 0C110.3 0 96 14.3 96 32l0 192 96 0 0-32c0-35.3 28.7-64 64-64l224 0 0-96c0-17.7-14.3-32-32-32L128 0zM256 160c-17.7 0-32 14.3-32 32l0 32 96 0c35.3 0 64 28.7 64 64l0 128 192 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-320 0zm240 64l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM64 256c-17.7 0-32 14.3-32 32l0 13L187.1 415.9c1.4 1 3.1 1.6 4.9 1.6s3.5-.6 4.9-1.6L352 301l0-13c0-17.7-14.3-32-32-32L64 256zm288 84.8L216 441.6c-6.9 5.1-15.3 7.9-24 7.9s-17-2.8-24-7.9L32 340.8 32 480c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-139.2z"
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
@prop ariaLabel = 'envelopes bulk solid'
@prop ...restProps
-->
