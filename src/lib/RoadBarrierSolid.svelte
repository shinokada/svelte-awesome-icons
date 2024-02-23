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
		ariaLabel = 'road barrier solid,',
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
	viewBox="0 0 640 512"
>
	<path
		d="M32 32C14.3 32 0 46.3 0 64V448c0 17.7 14.3 32 32 32s32-14.3 32-32V266.3L149.2 96H64V64c0-17.7-14.3-32-32-32zM405.2 96H330.8l-5.4 10.7L234.8 288h74.3l5.4-10.7L405.2 96zM362.8 288h74.3l5.4-10.7L533.2 96H458.8l-5.4 10.7L362.8 288zM202.8 96l-5.4 10.7L106.8 288h74.3l5.4-10.7L277.2 96H202.8zm288 192H576V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v53.7L490.8 288z"
	/>
</svg>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:color?:  string; = ctx.color || 'currentColor';
@props:ariaLabel?:  string; = 'road barrier solid,';
@props:class?: string;
-->
