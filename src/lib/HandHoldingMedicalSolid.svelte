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
  viewBox="0 0 576 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M240 24c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 56 56 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-56 0 0 56c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-56-56 0c-13.3 0-24-10.7-24-24l0-48c0-13.3 10.7-24 24-24l56 0 0-56zM66.7 384l42.5-42.5c24-24 56.6-37.5 90.5-37.5L352 304c17.7 0 32 14.3 32 32s-14.3 32-32 32l-72 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l112.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5s9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l34.7 0z"
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
