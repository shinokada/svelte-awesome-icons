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
		ariaLabel = 'head side mask solid',
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
	viewBox="0 0 576 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M32 224.2c0-22.2 3.2-43.6 9.2-63.9L262.2 321c-4 9.5-6.2 20-6.2 31l0 160-128 0c-17.7 0-32-14.3-32-32l0-72.7c0-16.7-6.9-32.5-17.1-45.8C48.6 322.4 32 274.1 32 224.2zm248.3 70.4L53 129.3C88.7 53 166.2 0 256 0l24 0c95.2 0 181.2 69.3 197.3 160.2c2.3 13 6.8 25.7 15.1 36l42 52.6c5.4 6.7 8.6 14.8 9.4 23.2L336 272c-21.7 0-41.3 8.6-55.7 22.6zM336 304l198 0s0 0 0 0l10 0-19.7 64L368 368c-8.8 0-16 7.2-16 16s7.2 16 16 16l146.5 0-9.8 32L368 432c-8.8 0-16 7.2-16 16s7.2 16 16 16l126.8 0-.9 2.8c-8.3 26.9-33.1 45.2-61.2 45.2L288 512l0-160c0-14 6-26.7 15.6-35.4c0 0 0 0 0 0c8.5-7.8 19.9-12.6 32.4-12.6zm48-80a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
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
@prop ariaLabel = 'head side mask solid'
@prop ...restProps
-->
