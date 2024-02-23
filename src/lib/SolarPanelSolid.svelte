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
		ariaLabel = 'solar panel solid,',
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
		d="M122.2 0C91.7 0 65.5 21.5 59.5 51.4L8.3 307.4C.4 347 30.6 384 71 384H288v64H224c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V384H569c40.4 0 70.7-36.9 62.8-76.6l-51.2-256C574.5 21.5 548.3 0 517.8 0H122.2zM260.9 64H379.1l10.4 104h-139L260.9 64zM202.3 168H101.4L122.2 64h90.4L202.3 168zM91.8 216H197.5L187.1 320H71L91.8 216zm153.9 0H394.3l10.4 104-169.4 0 10.4-104zm196.8 0H548.2L569 320h-116L442.5 216zm96-48H437.7L427.3 64h90.4l31.4-6.3L517.8 64l20.8 104z"
	/>
</svg>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:color?:  string; = ctx.color || 'currentColor';
@props:ariaLabel?:  string; = 'solar panel solid,';
@props:class?: string;
-->
