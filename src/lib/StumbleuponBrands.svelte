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
		ariaLabel = 'stumbleupon brands',
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
		d="M502.9 266v69.7c0 62.1-50.3 112.4-112.4 112.4-61.8 0-112.4-49.8-112.4-111.3v-70.2l34.3 16 51.1-15.2V338c0 14.7 12 26.5 26.7 26.5S417 352.7 417 338v-72h85.9zm-224.7-58.2l34.3 16 51.1-15.2V173c0-60.5-51.1-109-112.1-109-60.8 0-112.1 48.2-112.1 108.2v162.4c0 14.9-12 26.7-26.7 26.7S86 349.5 86 334.6V266H0v69.7C0 397.7 50.3 448 112.4 448c61.6 0 112.4-49.5 112.4-110.8V176.9c0-14.7 12-26.7 26.7-26.7s26.7 12 26.7 26.7v30.9z"
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
@prop ariaLabel = 'stumbleupon brands'
@prop ...restProps
-->
