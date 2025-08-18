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
		ariaLabel = 'octopus deploy brands',
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
		d="M455.6,349.2c-45.891-39.09-36.67-77.877-16.095-128.11C475.16,134.04,415.967,34.14,329.93,8.3,237.04-19.6,134.252,24.341,99.677,117.147a180.862,180.862,0,0,0-10.988,73.544c1.733,29.543,14.717,52.97,24.09,80.3,17.2,50.161-28.1,92.743-66.662,117.582-46.806,30.2-36.319,39.857-8.428,41.858,23.378,1.68,44.478-4.548,65.265-15.045,9.2-4.647,40.687-18.931,45.13-28.588C135.9,413.388,111.122,459.5,126.621,488.9c19.1,36.229,67.112-31.77,76.709-45.812,8.591-12.572,42.963-81.279,63.627-46.926,18.865,31.361,8.6,76.391,35.738,104.622,32.854,34.2,51.155-18.312,51.412-44.221.163-16.411-6.1-95.852,29.9-59.944C405.428,418,436.912,467.8,472.568,463.642c38.736-4.516-22.123-67.967-28.262-78.695,5.393,4.279,53.665,34.128,53.818,9.52C498.234,375.678,468.039,359.8,455.6,349.2Z"
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
@prop ariaLabel = 'octopus deploy brands'
@prop ...restProps
-->
