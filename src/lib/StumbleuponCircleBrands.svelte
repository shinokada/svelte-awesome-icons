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
		ariaLabel = 'stumbleupon circle brands',
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
	viewBox="0 0 496 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 177.5c-9.8 0-17.8 8-17.8 17.8v106.9c0 40.9-33.9 73.9-74.9 73.9-41.4 0-74.9-33.5-74.9-74.9v-46.5h57.3v45.8c0 10 8 17.8 17.8 17.8s17.8-7.9 17.8-17.8V200.1c0-40 34.2-72.1 74.7-72.1 40.7 0 74.7 32.3 74.7 72.6v23.7l-34.1 10.1-22.9-10.7v-20.6c.1-9.6-7.9-17.6-17.7-17.6zm167.6 123.6c0 41.4-33.5 74.9-74.9 74.9-41.2 0-74.9-33.2-74.9-74.2V263l22.9 10.7 34.1-10.1v47.1c0 9.8 8 17.6 17.8 17.6s17.8-7.9 17.8-17.6v-48h57.3c-.1 45.9-.1 46.4-.1 46.4z"
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
@prop ariaLabel = 'stumbleupon circle brands'
@prop ...restProps
-->
