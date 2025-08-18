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
		ariaLabel = 'money bill wheat solid',
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
		d="M176 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80c0-8.8 7.2-16 16-16zM56 16l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L56 64C42.7 64 32 53.3 32 40s10.7-24 24-24zM24 88l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 136c-13.3 0-24-10.7-24-24S10.7 88 24 88zm8 96c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zM272 16c0-8.8 7.2-16 16-16c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80zM400 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80c0-8.8 7.2-16 16-16zm80 144c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16zM352 128c8.8 0 16 7.2 16 16c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-96 16c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16zM0 304c0-26.5 21.5-48 48-48l416 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 304zM48 416l0 48 48 0c0-26.5-21.5-48-48-48zM96 304l-48 0 0 48c26.5 0 48-21.5 48-48zM464 416c-26.5 0-48 21.5-48 48l48 0 0-48zM416 304c0 26.5 21.5 48 48 48l0-48-48 0zm-96 80a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"
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
@prop ariaLabel = 'money bill wheat solid'
@prop ...restProps
-->
