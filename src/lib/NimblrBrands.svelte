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
		ariaLabel = 'nimblr brands',
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
		d="M246.6 299.29c15.57 0 27.15 11.46 27.15 27s-11.62 27-27.15 27c-15.7 0-27.15-11.57-27.15-27s11.55-27 27.15-27zM113 326.25c0-15.61 11.68-27 27.15-27s27.15 11.46 27.15 27-11.47 27-27.15 27c-15.44 0-27.15-11.31-27.15-27M191.76 159C157 159 89.45 178.77 59.25 227L14 0v335.48C14 433.13 93.61 512 191.76 512s177.76-78.95 177.76-176.52S290.13 159 191.76 159zm0 308.12c-73.27 0-132.51-58.9-132.51-131.59s59.24-131.59 132.51-131.59 132.51 58.86 132.51 131.54S265 467.07 191.76 467.07z"
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
@prop ariaLabel = 'nimblr brands'
@prop ...restProps
-->
