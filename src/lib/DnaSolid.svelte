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
  viewBox="0 0 384 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M352 0c17.7 0 32 14.3 32 32 0 57.8-24.4 104.8-57.4 144.5-24.1 28.9-53.8 55.1-83.6 79.5 29.8 24.5 59.5 50.6 83.6 79.5 33 39.6 57.4 86.7 57.4 144.5 0 17.7-14.3 32-32 32s-32-14.3-32-32L64 480c0 17.7-14.3 32-32 32S0 497.7 0 480C0 422.2 24.4 375.2 57.4 335.5 81.5 306.6 111.2 280.5 141 256 111.2 231.5 81.5 205.4 57.4 176.5 24.4 136.8 0 89.8 0 32 0 14.3 14.3 0 32 0S64 14.3 64 32l256 0c0-17.7 14.3-32 32-32zM283.5 384l-182.9 0c-8.2 10.5-15.1 21.1-20.6 32l224.2 0c-5.6-10.9-12.5-21.5-20.6-32zM238 336c-14.3-13-29.8-25.8-46-39-16.2 13.1-31.7 26-46 39l92 0zM100.5 128l182.9 0c8.2-10.5 15.1-21.1 20.6-32L79.9 96c5.6 10.9 12.5 21.5 20.6 32zM146 176c14.3 13 29.8 25.8 46 39 16.2-13.1 31.7-26 46-39l-92 0z"
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
