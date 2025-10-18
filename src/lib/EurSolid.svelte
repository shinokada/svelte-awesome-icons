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
    d="M73.3 192C100.8 99.5 186.5 32 288 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-65.6 0-122 39.5-146.7 96L272 192c13.3 0 24 10.7 24 24s-10.7 24-24 24l-143.2 0c-.5 5.3-.8 10.6-.8 16s.3 10.7 .8 16L272 272c13.3 0 24 10.7 24 24s-10.7 24-24 24l-130.7 0c24.7 56.5 81.1 96 146.7 96l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-101.5 0-187.2-67.5-214.7-160L40 320c-13.3 0-24-10.7-24-24s10.7-24 24-24l24.6 0c-.7-10.5-.7-21.5 0-32L40 240c-13.3 0-24-10.7-24-24s10.7-24 24-24l33.3 0z"
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
