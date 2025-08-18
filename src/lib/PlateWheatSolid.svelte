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
		ariaLabel = 'plate wheat solid',
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
		d="M176 32c44.2 0 80 35.8 80 80l0 16c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80l0-16c0-8.8 7.2-16 16-16zM56 64l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM24 136l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 96c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zM272 48c0-8.8 7.2-16 16-16c44.2 0 80 35.8 80 80l0 16c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80l0-16zM400 32c44.2 0 80 35.8 80 80l0 16c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80l0-16c0-8.8 7.2-16 16-16zm80 160l0 16c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16zM352 176c8.8 0 16 7.2 16 16l0 16c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80zm-96 16l0 16c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16zM3.5 347.6C1.6 332.9 13 320 27.8 320l456.4 0c14.8 0 26.2 12.9 24.4 27.6C502.3 397.8 464.2 437 416 446l0 2c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-2c-48.2-9-86.3-48.2-92.5-98.4z"
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
@prop ariaLabel = 'plate wheat solid'
@prop ...restProps
-->
