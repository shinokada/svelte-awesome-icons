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
		ariaLabel = 'lari sign solid',
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
	viewBox="0 0 384 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M144 32c17.7 0 32 14.3 32 32l0 32.7c5.3-.4 10.6-.7 16-.7s10.7 .2 16 .7L208 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 49.4c54.9 25.2 95.8 75.5 108.2 136.2c3.5 17.3-7.7 34.2-25 37.7s-34.2-7.7-37.7-25c-6.1-29.9-22.5-55.9-45.4-74.3l0 67.9c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-95c-5.2-.7-10.6-1-16-1s-10.8 .3-16 1l0 95c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-67.9C82.7 211.5 64 247.6 64 288c0 70.7 57.3 128 128 128l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l16.9 0C18.5 382 0 337.2 0 288c0-77.5 45.9-144.3 112-174.6L112 64c0-17.7 14.3-32 32-32z"
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
@prop ariaLabel = 'lari sign solid'
@prop ...restProps
-->
