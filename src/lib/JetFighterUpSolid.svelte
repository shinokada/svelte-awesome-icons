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
		ariaLabel = 'jet fighter up solid',
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
		d="M270.7 9.7C268.2 3.8 262.4 0 256 0s-12.2 3.8-14.7 9.7L197.2 112.6c-3.4 8-5.2 16.5-5.2 25.2l0 77-144 84L48 280c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 56 0 32 0 24c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8 144 0 0 32.7L133.5 468c-3.5 3-5.5 7.4-5.5 12l0 16c0 8.8 7.2 16 16 16l96 0 0-64c0-8.8 7.2-16 16-16s16 7.2 16 16l0 64 96 0c8.8 0 16-7.2 16-16l0-16c0-4.6-2-9-5.5-12L320 416.7l0-32.7 144 0 0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-24 0-32 0-56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 18.8-144-84 0-77c0-8.7-1.8-17.2-5.2-25.2L270.7 9.7z"
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
@prop ariaLabel = 'jet fighter up solid'
@prop ...restProps
-->
