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
		ariaLabel = 'kiwi bird solid',
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
	viewBox="0 0 576 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M291.2 388.4c31.2-18.8 64.7-36.4 101.1-36.4l55.7 0c4.6 0 9.1-.2 13.6-.7l85.3 121.9c4 5.7 11.3 8.2 17.9 6.1s11.2-8.3 11.2-15.3l0-240c0-70.7-57.3-128-128-128l-55.7 0c-36.4 0-69.9-17.6-101.1-36.4C262.3 42.1 228.3 32 192 32C86 32 0 118 0 224c0 71.1 38.6 133.1 96 166.3L96 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-46c15.3 3.9 31.4 6 48 6c5.4 0 10.7-.2 16-.7l0 40.7c0 13.3 10.7 24 24 24s24-10.7 24-24l0-50.9c12.4-4.4 24.2-10 35.2-16.7zM448 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
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
@prop ariaLabel = 'kiwi bird solid'
@prop ...restProps
-->
