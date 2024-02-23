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
		ariaLabel = 'dashcube brands,',
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
	viewBox="0 0 448 512"
>
	<path
		d="M326.6 104H110.4c-51.1 0-91.2 43.3-91.2 93.5V427c0 50.5 40.1 85 91.2 85h227.2c51.1 0 91.2-34.5 91.2-85V0L326.6 104zM153.9 416.5c-17.7 0-32.4-15.1-32.4-32.8V240.8c0-17.7 14.7-32.5 32.4-32.5h140.7c17.7 0 32 14.8 32 32.5v123.5l51.1 52.3H153.9z"
	/>
</svg>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:color?:  string; = ctx.color || 'currentColor';
@props:ariaLabel?:  string; = 'dashcube brands,';
@props:class?: string;
-->
