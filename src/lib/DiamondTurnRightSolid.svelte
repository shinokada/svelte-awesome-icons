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
		ariaLabel = 'diamond turn right solid',
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
		d="M227.7 11.7c15.6-15.6 40.9-15.6 56.6 0l216 216c15.6 15.6 15.6 40.9 0 56.6l-216 216c-15.6 15.6-40.9 15.6-56.6 0l-216-216c-15.6-15.6-15.6-40.9 0-56.6l216-216zm87.6 137c-4.6-4.6-11.5-5.9-17.4-3.5s-9.9 8.3-9.9 14.8l0 56-64 0c-35.3 0-64 28.7-64 64l0 48c0 13.3 10.7 24 24 24s24-10.7 24-24l0-48c0-8.8 7.2-16 16-16l64 0 0 56c0 6.5 3.9 12.3 9.9 14.8s12.9 1.1 17.4-3.5l80-80c6.2-6.2 6.2-16.4 0-22.6l-80-80z"
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
@prop ariaLabel = 'diamond turn right solid'
@prop ...restProps
-->
