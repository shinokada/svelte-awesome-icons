<script lang="ts">
	import { getContext } from 'svelte';
	interface CtxType {
		size?: string;
		role?: string;
		color?: string;
	}
	const ctx: CtxType = getContext('iconCtx') ?? {};
	interface Props {
		size?: string;
		role?: string;
		color?: string;
		ariaLabel?: string;
		class?: string;
	}
	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		color = ctx.color || 'currentColor',
		ariaLabel = 'peace solid,',
		class: classname,
		...restProps
	} = $props<Props>();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{...restProps}
	{role}
	width={size}
	height={size}
	fill={color}
	class={classname}
	aria-label={ariaLabel}
	viewBox="0 0 512 512"
>
	<path
		d="M224 445.3V323.5l-94.3 77.1c26.1 22.8 58.5 38.7 94.3 44.7zM89.2 351.1L224 240.8V66.7C133.2 81.9 64 160.9 64 256c0 34.6 9.2 67.1 25.2 95.1zm293.1 49.5L288 323.5V445.3c35.7-6 68.1-21.9 94.3-44.7zm40.6-49.5c16-28 25.2-60.5 25.2-95.1c0-95.1-69.2-174.1-160-189.3V240.8L422.8 351.1zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
	/>
</svg>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:color?:  string; = ctx.color || 'currentColor';
@props:ariaLabel?:  string; = 'peace solid,';
@props:class?: string;
-->
