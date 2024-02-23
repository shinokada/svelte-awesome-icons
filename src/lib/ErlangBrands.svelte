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
		ariaLabel = 'erlang brands,',
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
		d="M87.2 53.5H0v405h100.4c-49.7-52.6-78.8-125.3-78.7-212.1-.1-76.7 24-142.7 65.5-192.9zm238.2 9.7c-45.9.1-85.1 33.5-89.2 83.2h169.9c-1.1-49.7-34.5-83.1-80.7-83.2zm230.7-9.6h.3l-.1-.1zm.3 0c31.4 42.7 48.7 97.5 46.2 162.7.5 6 .5 11.7 0 24.1H230.2c-.2 109.7 38.9 194.9 138.6 195.3 68.5-.3 118-51 151.9-106.1l96.4 48.2c-17.4 30.9-36.5 57.8-57.9 80.8H640v-405z"
	/>
</svg>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:color?:  string; = ctx.color || 'currentColor';
@props:ariaLabel?:  string; = 'erlang brands,';
@props:class?: string;
-->
