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
		ariaLabel = 'arrow right to city solid,',
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
		d="M288 48c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48V192h40V120c0-13.3 10.7-24 24-24s24 10.7 24 24v72h24c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H432 336c-26.5 0-48-21.5-48-48V48zm64 32v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zm16 80c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H368zM352 272v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zm176-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H528zM512 368v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H528c-8.8 0-16 7.2-16 16zM166.6 153.4l80 80c12.5 12.5 12.5 32.8 0 45.3l-80 80c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L146.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H146.7l-25.4-25.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0z"
	/>
</svg>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:color?:  string; = ctx.color || 'currentColor';
@props:ariaLabel?:  string; = 'arrow right to city solid,';
@props:class?: string;
-->
