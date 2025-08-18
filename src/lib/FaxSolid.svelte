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
		ariaLabel = 'fax solid',
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
		d="M128 64l0 96 64 0 0-96 194.7 0L416 93.3l0 66.7 64 0 0-66.7c0-17-6.7-33.3-18.7-45.3L432 18.7C420 6.7 403.7 0 386.7 0L192 0c-35.3 0-64 28.7-64 64zM0 160L0 480c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32zm480 32l-352 0 0 288c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32zM256 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM224 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
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
@prop ariaLabel = 'fax solid'
@prop ...restProps
-->
