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
		ariaLabel = 'maxcdn brands,',
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
		d="M461.1 442.7h-97.4L415.6 200c2.3-10.2.9-19.5-4.4-25.7-5-6.1-13.7-9.6-24.2-9.6h-49.3l-59.5 278h-97.4l59.5-278h-83.4l-59.5 278H0l59.5-278-44.6-95.4H387c39.4 0 75.3 16.3 98.3 44.9 23.3 28.6 31.8 67.4 23.6 105.9l-47.8 222.6z"
	/>
</svg>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:color?:  string; = ctx.color || 'currentColor';
@props:ariaLabel?:  string; = 'maxcdn brands,';
@props:class?: string;
-->
