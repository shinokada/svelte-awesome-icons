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
		ariaLabel = 'buromobelexperte brands',
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
		d="M0 32v128h128V32H0zm120 120H8V40h112v112zm40-120v128h128V32H160zm120 120H168V40h112v112zm40-120v128h128V32H320zm120 120H328V40h112v112zM0 192v128h128V192H0zm120 120H8V200h112v112zm40-120v128h128V192H160zm120 120H168V200h112v112zm40-120v128h128V192H320zm120 120H328V200h112v112zM0 352v128h128V352H0zm120 120H8V360h112v112zm40-120v128h128V352H160zm120 120H168V360h112v112zm40-120v128h128V352H320z"
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
@prop ariaLabel = 'buromobelexperte brands'
@prop ...restProps
-->
