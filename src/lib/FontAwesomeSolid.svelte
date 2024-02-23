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
		ariaLabel = 'font awesome solid,',
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
		d="M448 48V384c-63.1 22.5-82.3 32-119.5 32c-62.8 0-86.6-32-149.3-32c-20.6 0-36.6 3.6-51.2 8.2v-64c14.6-4.6 30.6-8.2 51.2-8.2c62.7 0 86.5 32 149.3 32c20.4 0 35.6-3 55.5-9.3v-208c-19.9 6.3-35.1 9.3-55.5 9.3c-62.8 0-86.6-32-149.3-32c-50.8 0-74.9 20.6-115.2 28.7V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32s32 14.3 32 32V76.7c40.3-8 64.4-28.7 115.2-28.7c62.7 0 86.5 32 149.3 32c37.1 0 56.4-9.5 119.5-32z"
	/>
</svg>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:color?:  string; = ctx.color || 'currentColor';
@props:ariaLabel?:  string; = 'font awesome solid,';
@props:class?: string;
-->
