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
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 448 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M415.1 111.9l-98.5-9 14-33.4c10.4-23.5-10.8-40.4-28.7-37L30.6 76.9c-15.1 2.7-26 18.3-21.4 36.6L114.3 461.8c6.5 21.3 36.7 24.2 47.7 7L197.3 388 432.5 156.7c16.4-16.8 4.3-42.9-17.4-44.8zM305.7 53.6c5.1-.7 7.5 2.5 5.2 7.4l-16.8 39.9-177.4-16.3 189-31zM30.8 107.9c-3.1-5.1 1-10 6.1-9.1l248.7 22.7-96.9 230.7-157.9-244.3zM144.1 456.4c-2.6 4-7.9 3.1-9.4-1.2L51.6 179.7 179.3 377.3c-7 15-35.2 79.1-35.2 79.1zM416.9 141.9l-198.7 195.4 89.7-213.7 106.4 9.7c4 1.1 5.7 5.3 2.6 8.6z"
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
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->
