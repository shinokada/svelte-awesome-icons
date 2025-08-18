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
		ariaLabel = 'audible brands',
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
		d="M640 199.9v54l-320 200L0 254v-54l320 200 320-200.1zm-194.5 72l47.1-29.4c-37.2-55.8-100.7-92.6-172.7-92.6-72 0-135.5 36.7-172.6 92.4h.3c2.5-2.3 5.1-4.5 7.7-6.7 89.7-74.4 219.4-58.1 290.2 36.3zm-220.1 18.8c16.9-11.9 36.5-18.7 57.4-18.7 34.4 0 65.2 18.4 86.4 47.6l45.4-28.4c-20.9-29.9-55.6-49.5-94.8-49.5-38.9 0-73.4 19.4-94.4 49zM103.6 161.1c131.8-104.3 318.2-76.4 417.5 62.1l.7 1 48.8-30.4C517.1 112.1 424.8 58.1 319.9 58.1c-103.5 0-196.6 53.5-250.5 135.6 9.9-10.5 22.7-23.5 34.2-32.6zm467 32.7z"
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
@prop ariaLabel = 'audible brands'
@prop ...restProps
-->
