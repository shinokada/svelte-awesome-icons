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
		ariaLabel = 'arrows to circle solid',
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
		d="M9.4 9.4C21.9-3.1 42.1-3.1 54.6 9.4L160 114.7 160 96c0-17.7 14.3-32 32-32s32 14.3 32 32l0 96c0 4.3-.9 8.5-2.4 12.2c-1.6 3.7-3.8 7.3-6.9 10.3l-.1 .1c-3.1 3-6.6 5.3-10.3 6.9c-3.8 1.6-7.9 2.4-12.2 2.4l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l18.7 0L9.4 54.6C-3.1 42.1-3.1 21.9 9.4 9.4zM256 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM114.7 352L96 352c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0s0 0 0 0l.1 0c8.8 0 16.7 3.6 22.5 9.3l.1 .1c3 3.1 5.3 6.6 6.9 10.3c1.6 3.8 2.4 7.9 2.4 12.2l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-18.7L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L114.7 352zM416 96c0-17.7 14.3-32 32-32s32 14.3 32 32l0 18.7L585.4 9.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L525.3 160l18.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-8.8 0-16.8-3.6-22.6-9.3l-.1-.1c-3-3.1-5.3-6.6-6.9-10.3s-2.4-7.8-2.4-12.2l0-.1s0 0 0 0l0-96zM525.3 352L630.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L480 397.3l0 18.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96s0 0 0 0l0-.1c0-4.3 .9-8.4 2.4-12.2c1.6-3.8 3.9-7.3 6.9-10.4c5.8-5.8 13.7-9.3 22.5-9.4l.1 0s0 0 0 0l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-18.7 0z"
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
@prop ariaLabel = 'arrows to circle solid'
@prop ...restProps
-->
