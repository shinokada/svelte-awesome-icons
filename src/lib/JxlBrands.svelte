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
		ariaLabel = 'jxl brands',
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
		d="M412.2 32H35.8C16 32 0 48 0 67.8V444.2C0 464 16 480 35.8 480H412.2c19.8 0 35.8-16 35.8-35.8V67.8C448 48 432 32 412.2 32zM378.6 333.7c0 40.2-32.6 72.8-72.8 72.8H70.2c0-40.2 32.6-72.8 72.8-72.8H378.6zm0-113.9c0 40.2-32.6 72.8-72.8 72.8H70.2c0-40.2 32.6-72.8 72.8-72.8H378.6zm0-113.9c0 40.2-32.6 72.8-72.8 72.8H70.2c0-40.2 32.6-72.8 72.8-72.8H378.6z"
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
@prop ariaLabel = 'jxl brands'
@prop ...restProps
-->
