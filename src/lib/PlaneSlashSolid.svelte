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
		ariaLabel = 'plane slash solid,',
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
		d="M440.6 320h73.8c34.2 0 93.7-28 93.7-64c0-35-59.5-64-93.7-64l-116.6 0L297.2 16.1C291.5 6.2 280.9 0 269.4 0H213.2c-10.6 0-18.3 10.2-15.4 20.4l40.3 140.9L38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L440.6 320zm-78.1 61.6L41.5 128.7C36 130.6 32 135.9 32 142c0 1.3 .2 2.6 .5 3.9L64 256 32.5 366.1c-.4 1.3-.5 2.6-.5 3.9c0 7.8 6.3 14 14 14H88c5 0 9.8-2.4 12.8-6.4L144 320H246.9l-49 171.6c-2.9 10.2 4.8 20.4 15.4 20.4l56.2 0c11.5 0 22.1-6.2 27.8-16.1l65.3-114.3z"
	/>
</svg>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:color?:  string; = ctx.color || 'currentColor';
@props:ariaLabel?:  string; = 'plane slash solid,';
@props:class?: string;
-->
