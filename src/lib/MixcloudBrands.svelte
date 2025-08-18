<script lang="ts">
	import { getContext } from 'svelte';
	import type { BaseProps, Props } from './types';

	const ctx: BaseProps = getContext('iconCtx') ?? {};

	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		color = ctx.color || 'currentColor',
		title,
		desc,
		ariaLabel = 'mixcloud brands',
		...restProps
	}: Props = $props();

	let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
	const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{...restProps}
	{role}
	width={size}
	height={size}
	fill={color}
	aria-label={ariaLabel}
	aria-describedby={hasDescription ? ariaDescribedby : undefined}
	viewBox="0 0 640 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M212.98 346.566H179.789V195.114L185.973 173.47H175.262L137.127 346.566H76.1069L37.7323 173.47H27.276L33.1913 195.114V346.566H0V165H65.6506L102.248 338.096H110.747L147.329 165H212.98L212.98 346.566ZM544.459 283.589L458.434 345.655V307.534L531.329 255.776L458.434 204.017V165.896L544.459 228.231H553.721L640 165.896V204.017L566.866 255.776L640 307.549V345.655L553.721 283.589H544.459ZM430.157 272.311H248.113V239.255H430.157V272.311Z"
	/>
</svg>

<!--
@component
[Go to docs](https://svelte-awesome-icons.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop title
@prop desc
@prop ariaLabel = 'mixcloud brands'
@prop ...restProps
-->
