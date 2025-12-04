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
  viewBox="0 0 448 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M366.3 186.9l-59.5 36.9-.8 36.9-29.3-19.3-39.4 24.3c2.2 55.2 2.5 59.3 2.5 59.5l-97.2 65.4-15.1-104.7 108.1-62-40.2-26-75.4 38.5-21-143.3 129-49.4-91.3-43.6-125.7 39.4 27.7 134.9 41.9 32.7-31.8 15.1 20.9 101.4 29.3 27.7-20.9 12.6 16.8 78.8 66.2 69.6c-10.8-74.8-11.7-78.6-11.7-78.8l77.9-55.3C244 365.4 242.3 367 242.3 367l.8 24.3 33.5 28.5-.8-77.1 46.9-33.5 26.8-18.4-2.5 36 25.1 17.6 6.7-74.6 58.7-43.6-71.2-39.4z"
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
