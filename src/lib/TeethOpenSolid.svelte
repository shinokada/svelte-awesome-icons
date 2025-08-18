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
		ariaLabel = 'teeth open solid',
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
		d="M96 32C43 32 0 75 0 128l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-53-43-96-96-96L96 32zM224 96c26.5 0 48 21.5 48 48l0 56c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-56c0-26.5 21.5-48 48-48zm80 48c0-26.5 21.5-48 48-48s48 21.5 48 48l0 56c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-56zM96 128c26.5 0 48 21.5 48 48l0 24c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-24c0-26.5 21.5-48 48-48zm336 48c0-26.5 21.5-48 48-48s48 21.5 48 48l0 24c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-24zM96 480l384 0c53 0 96-43 96-96l0-32c0-35.3-28.7-64-64-64L64 288c-35.3 0-64 28.7-64 64l0 32c0 53 43 96 96 96zm0-64c-26.5 0-48-21.5-48-48l0-24c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 24c0 26.5-21.5 48-48 48zm80-48l0-24c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 24c0 26.5-21.5 48-48 48s-48-21.5-48-48zm176 48c-26.5 0-48-21.5-48-48l0-24c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 24c0 26.5-21.5 48-48 48zm80-48l0-24c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 24c0 26.5-21.5 48-48 48s-48-21.5-48-48z"
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
@prop ariaLabel = 'teeth open solid'
@prop ...restProps
-->
