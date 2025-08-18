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
		ariaLabel = 'backward fast solid',
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
		d="M493.6 445c-11.2 5.3-24.5 3.6-34.1-4.4L288 297.7 288 416c0 12.4-7.2 23.7-18.4 29s-24.5 3.6-34.1-4.4L64 297.7 64 416c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64s32 14.3 32 32l0 118.3L235.5 71.4c9.5-7.9 22.8-9.7 34.1-4.4S288 83.6 288 96l0 118.3L459.5 71.4c9.5-7.9 22.8-9.7 34.1-4.4S512 83.6 512 96l0 320c0 12.4-7.2 23.7-18.4 29z"
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
@prop ariaLabel = 'backward fast solid'
@prop ...restProps
-->
