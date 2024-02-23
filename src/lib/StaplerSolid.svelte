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
		ariaLabel = 'stapler solid,',
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
		d="M640 299.3V304 432c0 26.5-21.5 48-48 48H512 448 64c-17.7 0-32-14.3-32-32s14.3-32 32-32H448V368H96c-17.7 0-32-14.3-32-32V219.4L33.8 214C14.2 210.5 0 193.5 0 173.7c0-8.9 2.9-17.5 8.2-24.6l35.6-47.5C76.7 57.8 128.2 32 182.9 32c27 0 53.6 6.3 77.8 18.4L586.9 213.5C619.5 229.7 640 263 640 299.3zM448 304V288L128 230.9V304H448z"
	/>
</svg>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:color?:  string; = ctx.color || 'currentColor';
@props:ariaLabel?:  string; = 'stapler solid,';
@props:class?: string;
-->
