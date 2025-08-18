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
		ariaLabel = 'turkish lira sign solid',
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
		d="M96 32c17.7 0 32 14.3 32 32l0 35.3L247.2 65.2c17-4.9 34.7 5 39.6 22s-5 34.7-22 39.6L128 165.9l0 29.4 119.2-34.1c17-4.9 34.7 5 39.6 22s-5 34.7-22 39.6L128 261.9 128 416l63.8 0c68.2 0 124.4-53.5 127.8-121.6l.4-8c.9-17.7 15.9-31.2 33.6-30.4s31.2 15.9 30.4 33.6l-.4 8C378.5 399.8 294.1 480 191.8 480L96 480c-17.7 0-32-14.3-32-32l0-167.9-23.2 6.6c-17 4.9-34.7-5-39.6-22s5-34.7 22-39.6L64 213.6l0-29.4-23.2 6.6c-17 4.9-34.7-5-39.6-22s5-34.7 22-39.6L64 117.6 64 64c0-17.7 14.3-32 32-32z"
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
@prop ariaLabel = 'turkish lira sign solid'
@prop ...restProps
-->
