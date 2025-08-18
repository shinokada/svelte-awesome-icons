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
		ariaLabel = 'face rolling eyes regular',
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
		d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM168 376c0 13.3 10.7 24 24 24l128 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-128 0c-13.3 0-24 10.7-24 24zm-8-104c-26.5 0-48-21.5-48-48c0-14.3 6.3-27.2 16.2-36c-.2 1.3-.2 2.6-.2 4c0 17.7 14.3 32 32 32s32-14.3 32-32c0-1.4-.1-2.7-.2-4c10 8.8 16.2 21.7 16.2 36c0 26.5-21.5 48-48 48zm0 32a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm192-32c-26.5 0-48-21.5-48-48c0-14.3 6.3-27.2 16.2-36c-.2 1.3-.2 2.6-.2 4c0 17.7 14.3 32 32 32s32-14.3 32-32c0-1.4-.1-2.7-.2-4c10 8.8 16.2 21.7 16.2 36c0 26.5-21.5 48-48 48zm0 32a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
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
@prop ariaLabel = 'face rolling eyes regular'
@prop ...restProps
-->
