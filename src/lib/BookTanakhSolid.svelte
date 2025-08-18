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
		ariaLabel = 'book tanakh solid',
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
		d="M352 0c53 0 96 43 96 96l0 320c0 53-43 96-96 96L64 512l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c-17.7 0-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0L64 0 352 0zm0 384L96 384l0 64 256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32zM138.7 208l13.9 24-27.7 0 13.9-24zm-13.9-24L97.1 232c-6.2 10.7 1.5 24 13.9 24l55.4 0 27.7 48c6.2 10.7 21.6 10.7 27.7 0l27.7-48 55.4 0c12.3 0 20-13.3 13.9-24l-27.7-48 27.7-48c6.2-10.7-1.5-24-13.9-24l-55.4 0L221.9 64c-6.2-10.7-21.6-10.7-27.7 0l-27.7 48L111 112c-12.3 0-20 13.3-13.9 24l27.7 48zm27.7 0l27.7-48 55.4 0 27.7 48-27.7 48-55.4 0-27.7-48zm0-48l-13.9 24-13.9-24 27.7 0zm41.6-24L208 88l13.9 24-27.7 0zm69.3 24l27.7 0-13.9 24-13.9-24zm13.9 72l13.9 24-27.7 0 13.9-24zm-55.4 48L208 280l-13.9-24 27.7 0z"
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
@prop ariaLabel = 'book tanakh solid'
@prop ...restProps
-->
