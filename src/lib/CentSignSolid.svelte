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
		ariaLabel = 'cent sign solid,',
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
	viewBox="0 0 384 512"
>
	<path
		d="M224 0c17.7 0 32 14.3 32 32V66.7c30.9 5.2 59.2 17.7 83.2 35.8c14.1 10.6 17 30.7 6.4 44.8s-30.7 17-44.8 6.4C279.4 137.5 252.9 128 224 128c-70.7 0-128 57.3-128 128s57.3 128 128 128c28.9 0 55.4-9.5 76.8-25.6c14.1-10.6 34.2-7.8 44.8 6.4s7.8 34.2-6.4 44.8c-24 18-52.4 30.6-83.2 35.8V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C101.2 430.1 32 351.1 32 256s69.2-174.1 160-189.3V32c0-17.7 14.3-32 32-32z"
	/>
</svg>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:color?:  string; = ctx.color || 'currentColor';
@props:ariaLabel?:  string; = 'cent sign solid,';
@props:class?: string;
-->
