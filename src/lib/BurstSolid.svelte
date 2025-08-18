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
		ariaLabel = 'burst solid',
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
		d="M37.6 4.2C28-2.3 15.2-1.1 7 7s-9.4 21-2.8 30.5l112 163.3L16.6 233.2C6.7 236.4 0 245.6 0 256s6.7 19.6 16.6 22.8l103.1 33.4L66.8 412.8c-4.9 9.3-3.2 20.7 4.3 28.1s18.8 9.2 28.1 4.3l100.6-52.9 33.4 103.1c3.2 9.9 12.4 16.6 22.8 16.6s19.6-6.7 22.8-16.6l33.4-103.1 100.6 52.9c9.3 4.9 20.7 3.2 28.1-4.3s9.2-18.8 4.3-28.1L392.3 312.2l103.1-33.4c9.9-3.2 16.6-12.4 16.6-22.8s-6.7-19.6-16.6-22.8L388.9 198.7l25.7-70.4c3.2-8.8 1-18.6-5.6-25.2s-16.4-8.8-25.2-5.6l-70.4 25.7L278.8 16.6C275.6 6.7 266.4 0 256 0s-19.6 6.7-22.8 16.6l-32.3 99.6L37.6 4.2z"
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
@prop ariaLabel = 'burst solid'
@prop ...restProps
-->
