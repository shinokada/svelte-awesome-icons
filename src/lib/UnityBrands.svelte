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
		ariaLabel = 'unity brands',
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
		d="M243.583 91.6027L323.695 138.384C326.575 140.026 326.68 144.583 323.695 146.225L228.503 201.854C225.623 203.55 222.22 203.444 219.549 201.854L124.357 146.225C121.425 144.636 121.373 139.973 124.357 138.384L204.417 91.6027V0L0 119.417V358.252L78.3843 312.477V218.914C78.3319 215.576 82.2066 213.192 85.0865 214.993L180.279 270.622C183.159 272.318 184.782 275.338 184.782 278.464V389.669C184.834 393.007 180.959 395.391 178.079 393.589L97.9673 346.808L19.583 392.583L224 512L428.417 392.583L350.033 346.808L269.921 393.589C267.093 395.338 263.114 393.06 263.218 389.669V278.464C263.218 275.126 265.051 272.159 267.721 270.622L362.914 214.993C365.741 213.245 369.72 215.47 369.616 218.914V312.477L448 358.252V119.417L243.583 0V91.6027Z"
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
@prop ariaLabel = 'unity brands'
@prop ...restProps
-->
