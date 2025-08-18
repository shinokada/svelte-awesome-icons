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
		ariaLabel = 'plane up solid',
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
		d="M192 93.7C192 59.5 221 0 256 0c36 0 64 59.5 64 93.7l0 66.3L497.8 278.5c8.9 5.9 14.2 15.9 14.2 26.6l0 56.7c0 10.9-10.7 18.6-21.1 15.2L320 320l0 80 57.6 43.2c4 3 6.4 7.8 6.4 12.8l0 42c0 7.8-6.3 14-14 14c-1.3 0-2.6-.2-3.9-.5L256 480 145.9 511.5c-1.3 .4-2.6 .5-3.9 .5c-7.8 0-14-6.3-14-14l0-42c0-5 2.4-9.8 6.4-12.8L192 400l0-80L21.1 377C10.7 380.4 0 372.7 0 361.8l0-56.7c0-10.7 5.3-20.7 14.2-26.6L192 160l0-66.3z"
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
@prop ariaLabel = 'plane up solid'
@prop ...restProps
-->
