<script lang="ts">
	import type { ComponentType } from 'svelte';
	interface Props {
		icon: ComponentType;
		size?: number;
		color?: string;
		role?: string;
		ariaLabel?: string;
		class?: string;
	}
	let {
		icon,
		size = 24,
		color,
		role = 'img',
		ariaLabel = 'Icon',
		class: classname,
		...restProps
	} = $props<Props>();
</script>

<svelte:component
	this={icon}
	{...restProps}
	{role}
	{size}
	{color}
	class={classname}
	aria-label={ariaLabel}
/>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@props: icon: ComponentType;
@props:size?:  number; = 24;
@props:color?: string;
@props:role?:  string; = 'img';
@props:ariaLabel?:  string; = 'Icon';
@props:class?: string;
-->
