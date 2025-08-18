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
		ariaLabel = 'blackberry brands',
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
		d="M166 116.9c0 23.4-16.4 49.1-72.5 49.1H23.4l21-88.8h67.8c42.1 0 53.8 23.3 53.8 39.7zm126.2-39.7h-67.8L205.7 166h70.1c53.8 0 70.1-25.7 70.1-49.1.1-16.4-11.6-39.7-53.7-39.7zM88.8 208.1H21L0 296.9h70.1c56.1 0 72.5-23.4 72.5-49.1 0-16.3-11.7-39.7-53.8-39.7zm180.1 0h-67.8l-18.7 88.8h70.1c53.8 0 70.1-23.4 70.1-49.1 0-16.3-11.7-39.7-53.7-39.7zm189.3-53.8h-67.8l-18.7 88.8h70.1c53.8 0 70.1-23.4 70.1-49.1.1-16.3-11.6-39.7-53.7-39.7zm-28 137.9h-67.8L343.7 381h70.1c56.1 0 70.1-23.4 70.1-49.1 0-16.3-11.6-39.7-53.7-39.7zM240.8 346H173l-18.7 88.8h70.1c56.1 0 70.1-25.7 70.1-49.1.1-16.3-11.6-39.7-53.7-39.7z"
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
@prop ariaLabel = 'blackberry brands'
@prop ...restProps
-->
