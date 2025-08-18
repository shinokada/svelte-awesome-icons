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
		ariaLabel = 'drumstick bite solid',
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
		d="M160 265.2c0 8.5-3.4 16.6-9.4 22.6l-26.8 26.8c-12.3 12.3-32.5 11.4-49.4 7.2C69.8 320.6 65 320 60 320c-33.1 0-60 26.9-60 60s26.9 60 60 60c6.3 0 12 5.7 12 12c0 33.1 26.9 60 60 60s60-26.9 60-60c0-5-.6-9.8-1.8-14.5c-4.2-16.9-5.2-37.1 7.2-49.4l26.8-26.8c6-6 14.1-9.4 22.6-9.4l89.2 0c6.3 0 12.4-.3 18.5-1c11.9-1.2 16.4-15.5 10.8-26c-8.5-15.8-13.3-33.8-13.3-53c0-61.9 50.1-112 112-112c8 0 15.7 .8 23.2 2.4c11.7 2.5 24.1-5.9 22-17.6C494.5 62.5 422.5 0 336 0C238.8 0 160 78.8 160 176l0 89.2z"
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
@prop ariaLabel = 'drumstick bite solid'
@prop ...restProps
-->
