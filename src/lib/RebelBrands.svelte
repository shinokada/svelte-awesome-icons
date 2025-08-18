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
		ariaLabel = 'rebel brands',
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
		d="M256.5 504C117.2 504 9 387.8 13.2 249.9 16 170.7 56.4 97.7 129.7 49.5c.3 0 1.9-.6 1.1.8-5.8 5.5-111.3 129.8-14.1 226.4 49.8 49.5 90 2.5 90 2.5 38.5-50.1-.6-125.9-.6-125.9-10-24.9-45.7-40.1-45.7-40.1l28.8-31.8c24.4 10.5 43.2 38.7 43.2 38.7.8-29.6-21.9-61.4-21.9-61.4L255.1 8l44.3 50.1c-20.5 28.8-21.9 62.6-21.9 62.6 13.8-23 43.5-39.3 43.5-39.3l28.5 31.8c-27.4 8.9-45.4 39.9-45.4 39.9-15.8 28.5-27.1 89.4.6 127.3 32.4 44.6 87.7-2.8 87.7-2.8 102.7-91.9-10.5-225-10.5-225-6.1-5.5.8-2.8.8-2.8 50.1 36.5 114.6 84.4 116.2 204.8C500.9 400.2 399 504 256.5 504z"
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
@prop ariaLabel = 'rebel brands'
@prop ...restProps
-->
