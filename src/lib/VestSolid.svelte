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
		ariaLabel = 'vest solid',
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
		d="M207.1 237.4L151.2 69.7C168.6 79.7 192.6 88 224 88s55.4-8.3 72.8-18.3L226.5 280.6c-1.6 4.9-2.5 10-2.5 15.2L224 464c0 26.5 21.5 48 48 48l128 0c26.5 0 48-21.5 48-48l0-193.5c0-9.5-2.8-18.7-8.1-26.6l-47.9-71.8c-5.3-7.9-8.1-17.1-8.1-26.6l0-17.5 0-73.7 0-6.3c0-26.5-21.5-48-48-48l-4.5 0c-.2 0-.4 0-.6 0c-.4 0-.8 0-1.2 0C311 0 295.7 9.7 285.7 18.8C276.4 27.2 257.2 40 224 40s-52.4-12.8-61.7-21.2C152.3 9.7 137 0 118.3 0c-.4 0-.8 0-1.2 0c-.2 0-.4 0-.6 0L112 0C85.5 0 64 21.5 64 48l0 6.3L64 128l0 17.5c0 9.5-2.8 18.7-8.1 26.6L8.1 243.9C2.8 251.8 0 261.1 0 270.5L0 464c0 26.5 21.5 48 48 48l128 0c9.9 0 19-3 26.7-8.1C195.9 492.2 192 478.5 192 464l0-168.2c0-8.6 1.4-17.1 4.1-25.3l11-33.1zM347.3 356.7l48 48c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-48-48c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0zm-294.6 48l48-48c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-48 48c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6z"
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
@prop ariaLabel = 'vest solid'
@prop ...restProps
-->
