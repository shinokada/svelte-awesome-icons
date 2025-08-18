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
		ariaLabel = 'peseta sign solid',
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
	viewBox="0 0 384 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M64 32C46.3 32 32 46.3 32 64l0 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l0 96 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96 96 0c77.4 0 142-55 156.8-128l3.2 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-3.2 0C334 87 269.4 32 192 32L64 32zM282.5 160L96 160l0-64 96 0c41.8 0 77.4 26.7 90.5 64zM96 224l186.5 0c-13.2 37.3-48.7 64-90.5 64l-96 0 0-64z"
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
@prop ariaLabel = 'peseta sign solid'
@prop ...restProps
-->
