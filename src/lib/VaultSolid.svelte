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
		ariaLabel = 'vault solid',
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
		d="M64 0C28.7 0 0 28.7 0 64L0 416c0 35.3 28.7 64 64 64l16 0 16 32 64 0 16-32 224 0 16 32 64 0 16-32 16 0c35.3 0 64-28.7 64-64l0-352c0-35.3-28.7-64-64-64L64 0zM224 320a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-240a160 160 0 1 1 0 320 160 160 0 1 1 0-320zM480 221.3L480 336c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-114.7c-18.6-6.6-32-24.4-32-45.3c0-26.5 21.5-48 48-48s48 21.5 48 48c0 20.9-13.4 38.7-32 45.3z"
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
@prop ariaLabel = 'vault solid'
@prop ...restProps
-->
