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
		ariaLabel = 'hurricane solid',
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
		d="M0 208C0 104.4 75.7 18.5 174.9 2.6C184 1.2 192 8.6 192 17.9l0 63.3c0 8.4 6.5 15.3 14.7 16.5C307 112.5 384 199 384 303.4c0 103.6-75.7 189.5-174.9 205.4c-9.2 1.5-17.1-5.9-17.1-15.2l0-63.3c0-8.4-6.5-15.3-14.7-16.5C77 398.9 0 312.4 0 208zm288 48A96 96 0 1 0 96 256a96 96 0 1 0 192 0zm-96-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
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
@prop ariaLabel = 'hurricane solid'
@prop ...restProps
-->
