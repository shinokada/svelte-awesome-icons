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
		ariaLabel = 'google plus brands',
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
		d="M256,8C119.1,8,8,119.1,8,256S119.1,504,256,504,504,392.9,504,256,392.9,8,256,8ZM185.3,380a124,124,0,0,1,0-248c31.3,0,60.1,11,83,32.3l-33.6,32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9,0-77.2,35.5-77.2,78.1S142.3,334,185.3,334c32.6,0,64.9-19.1,70.1-53.3H185.3V238.1H302.2a109.2,109.2,0,0,1,1.9,20.7c0,70.8-47.5,121.2-118.8,121.2ZM415.5,273.8v35.5H380V273.8H344.5V238.3H380V202.8h35.5v35.5h35.2v35.5Z"
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
@prop ariaLabel = 'google plus brands'
@prop ...restProps
-->
