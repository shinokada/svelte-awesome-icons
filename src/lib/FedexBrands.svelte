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
		ariaLabel = 'fedex brands',
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
	viewBox="0 0 640 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M586 284.5l53.3-59.9h-62.4l-21.7 24.8-22.5-24.8H414v-16h56.1v-48.1H318.9V236h-.5c-9.6-11-21.5-14.8-35.4-14.8-28.4 0-49.8 19.4-57.3 44.9-18-59.4-97.4-57.6-121.9-14v-24.2H49v-26.2h60v-41.1H0V345h49v-77.5h48.9c-1.5 5.7-2.3 11.8-2.3 18.2 0 73.1 102.6 91.4 130.2 23.7h-42c-14.7 20.9-45.8 8.9-45.8-14.6h85.5c3.7 30.5 27.4 56.9 60.1 56.9 14.1 0 27-6.9 34.9-18.6h.5V345h212.2l22.1-25 22.3 25H640l-54-60.5zm-446.7-16.6c6.1-26.3 41.7-25.6 46.5 0h-46.5zm153.4 48.9c-34.6 0-34-62.8 0-62.8 32.6 0 34.5 62.8 0 62.8zm167.8 19.1h-94.4V169.4h95v30.2H405v33.9h55.5v28.1h-56.1v44.7h56.1v29.6zm-45.9-39.8v-24.4h56.1v-44l50.7 57-50.7 57v-45.6h-56.1zm138.6 10.3l-26.1 29.5H489l45.6-51.2-45.6-51.2h39.7l26.6 29.3 25.6-29.3h38.5l-45.4 51 46 51.4h-40.5l-26.3-29.5z"
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
@prop ariaLabel = 'fedex brands'
@prop ...restProps
-->
