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
		ariaLabel = 'simplybuilt brands',
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
		d="M481.2 64h-106c-14.5 0-26.6 11.8-26.6 26.3v39.6H163.3V90.3c0-14.5-12-26.3-26.6-26.3h-106C16.1 64 4.3 75.8 4.3 90.3v331.4c0 14.5 11.8 26.3 26.6 26.3h450.4c14.8 0 26.6-11.8 26.6-26.3V90.3c-.2-14.5-12-26.3-26.7-26.3zM149.8 355.8c-36.6 0-66.4-29.7-66.4-66.4 0-36.9 29.7-66.6 66.4-66.6 36.9 0 66.6 29.7 66.6 66.6 0 36.7-29.7 66.4-66.6 66.4zm212.4 0c-36.9 0-66.6-29.7-66.6-66.6 0-36.6 29.7-66.4 66.6-66.4 36.6 0 66.4 29.7 66.4 66.4 0 36.9-29.8 66.6-66.4 66.6z"
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
@prop ariaLabel = 'simplybuilt brands'
@prop ...restProps
-->
