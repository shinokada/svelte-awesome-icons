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

  const ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
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
  viewBox="0 0 640 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M640 388.3c0 16.9-7.1 32.2-18.4 43.1l-35-23.3-292.7-195.1c-36.1-24.1-78.6-36.9-122-36.9l-3.9 0c-2.7 0-5.4 0-8 .1l22.2-100c5.7-25.8 28.6-44.1 55-44.1 12.2 0 24.1 4 33.8 11.3l4.7 3.5c26.3 19.7 62.4 19.7 88.6 0l4.7-3.5c9.8-7.3 21.6-11.3 33.8-11.3 26.4 0 49.3 18.3 55 44.1l33 148.5C574.5 232.3 640 302.6 640 388.3zM171.9 224c33.9 0 67.1 10 95.4 28.9L560 448 56 448c-30.9 0-56-25.1-56-56 0-92.8 75.2-168 168-168l3.9 0z"
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
