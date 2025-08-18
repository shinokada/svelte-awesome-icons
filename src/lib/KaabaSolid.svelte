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
		ariaLabel = 'kaaba solid',
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
		d="M60 120l228 71.2L516 120 288 48.8 60 120zM278.5 1.5c6.2-1.9 12.9-1.9 19.1 0l256 80C566.9 85.6 576 98 576 112l0 16s0 0 0 0l0 21.2L292.8 237.7c-3.1 1-6.4 1-9.5 0L0 149.2 0 128l0-16C0 98 9.1 85.6 22.5 81.5l256-80zm23.9 266.8L576 182.8l0 46.5-52.8 16.5c-8.4 2.6-13.1 11.6-10.5 20s11.6 13.1 20 10.5L576 262.8 576 400c0 14-9.1 26.4-22.5 30.5l-256 80c-6.2 1.9-12.9 1.9-19.1 0l-256-80C9.1 426.4 0 414 0 400L0 262.8l43.2 13.5c8.4 2.6 17.4-2.1 20-10.5s-2.1-17.4-10.5-20L0 229.2l0-46.5 273.7 85.5c9.3 2.9 19.3 2.9 28.6 0zm-185.5-2.6c-8.4-2.6-17.4 2.1-20 10.5s2.1 17.4 10.5 20l64 20c8.4 2.6 17.4-2.1 20-10.5s-2.1-17.4-10.5-20l-64-20zm352 30.5c8.4-2.6 13.1-11.6 10.5-20s-11.6-13.1-20-10.5l-64 20c-8.4 2.6-13.1 11.6-10.5 20s11.6 13.1 20 10.5l64-20zm-224 9.5c-8.4-2.6-17.4 2.1-20 10.5s2.1 17.4 10.5 20l38.5 12c9.3 2.9 19.3 2.9 28.6 0l38.5-12c8.4-2.6 13.1-11.6 10.5-20s-11.6-13.1-20-10.5l-38.5 12c-3.1 1-6.4 1-9.5 0l-38.5-12z"
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
@prop ariaLabel = 'kaaba solid'
@prop ...restProps
-->
