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
		ariaLabel = 'tornado solid',
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
	viewBox="0 0 448 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M0 32L0 45.6C0 62.7 1.7 79.6 5 96l352.8 0c3.2-6.9 7.5-13.3 13-18.8l38.6-38.6c4.2-4.2 6.6-10 6.6-16C416 10.1 405.9 0 393.4 0L32 0C14.3 0 0 14.3 0 32zm352.2 96L13.6 128c12.2 35.9 32.3 68.7 58.8 96L412 224l-47.2-62.9c-7.3-9.7-11.6-21.2-12.6-33.1zm-226 138.2l116.4 68.5c8.2 4.8 15.8 10.7 22.5 17.3L445 352c2-9.8 3-19.9 3-30.1c0-23-5.3-45.5-15.3-65.9l-322.5 0c5.2 3.6 10.5 7 16 10.2zM288 384c10.3 21.4 13.8 45.5 9.9 69l-5.9 35.7c-2 12.2 7.4 23.4 19.8 23.4c5.3 0 10.4-2.1 14.2-5.9l78.2-78.2c12.8-12.8 23.1-27.7 30.4-43.9L288 384z"
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
@prop ariaLabel = 'tornado solid'
@prop ...restProps
-->
