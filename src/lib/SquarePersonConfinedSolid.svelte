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
		ariaLabel = 'square person confined solid,',
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
		d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm96 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm80 104c0-30.9 25.1-56 56-56s56 25.1 56 56V350.1c0 36.4-29.5 65.9-65.9 65.9c-17.5 0-34.3-6.9-46.6-19.3L184.8 342l-28.1 56.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l48-96c4.6-9.2 13.3-15.6 23.5-17.3s20.5 1.7 27.8 9L240 306.7V248z"
	/>
</svg>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:color?:  string; = ctx.color || 'currentColor';
@props:ariaLabel?:  string; = 'square person confined solid,';
@props:class?: string;
-->
