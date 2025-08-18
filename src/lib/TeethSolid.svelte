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
		ariaLabel = 'teeth solid',
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
		d="M0 128C0 75 43 32 96 32l384 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96L96 480c-53 0-96-43-96-96L0 128zm176 48l0 56c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-56c0-26.5-21.5-48-48-48s-48 21.5-48 48zm176-48c-26.5 0-48 21.5-48 48l0 56c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-56c0-26.5-21.5-48-48-48zM48 208l0 24c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-24c0-26.5-21.5-48-48-48s-48 21.5-48 48zM96 384c26.5 0 48-21.5 48-48l0-24c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 24c0 26.5 21.5 48 48 48zm80-48c0 26.5 21.5 48 48 48s48-21.5 48-48l0-24c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 24zm176 48c26.5 0 48-21.5 48-48l0-24c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 24c0 26.5 21.5 48 48 48zm80-176l0 24c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-24c0-26.5-21.5-48-48-48s-48 21.5-48 48zm48 176c26.5 0 48-21.5 48-48l0-24c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 24c0 26.5 21.5 48 48 48z"
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
@prop ariaLabel = 'teeth solid'
@prop ...restProps
-->
