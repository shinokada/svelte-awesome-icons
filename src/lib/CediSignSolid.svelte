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
		ariaLabel = 'cedi sign solid',
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
		d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 34.7C101.2 81.9 32 160.9 32 256s69.2 174.1 160 189.3l0 34.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-34.7c30.9-5.2 59.2-17.7 83.2-35.8c14.1-10.6 17-30.7 6.4-44.8s-30.7-17-44.8-6.4c-13.2 9.9-28.3 17.3-44.8 21.6L256 132c16.4 4.2 31.6 11.6 44.8 21.6c14.1 10.6 34.2 7.8 44.8-6.4s7.8-34.2-6.4-44.8c-24-18-52.4-30.6-83.2-35.8L256 32zM192 132L192 380c-55.2-14.2-96-64.3-96-124s40.8-109.8 96-124z"
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
@prop ariaLabel = 'cedi sign solid'
@prop ...restProps
-->
