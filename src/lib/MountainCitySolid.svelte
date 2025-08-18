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
		ariaLabel = 'mountain city solid',
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
		d="M336 0c-26.5 0-48 21.5-48 48l0 92.1 71.4 118.4c2.5-1.6 5.4-2.5 8.6-2.5l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-3.5 0 73.8 122.4c12.4 20.6 12.9 46.3 1.2 67.3c-.4 .8-.9 1.6-1.4 2.3L592 512c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48l-24 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72-40 0 0-144c0-26.5-21.5-48-48-48L336 0zm32 64l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM352 176c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm160 96c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM224 188.9L283.8 288 223 288l-48 64-24.6-41.2L224 188.9zm29.4-44.2C247.1 134.3 236 128 224 128s-23.1 6.3-29.4 16.7L5.1 458.9c-6.5 10.8-6.7 24.3-.7 35.3S22 512 34.5 512l379.1 0c12.5 0 24-6.8 30.1-17.8s5.8-24.5-.7-35.3L253.4 144.7z"
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
@prop ariaLabel = 'mountain city solid'
@prop ...restProps
-->
