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
  viewBox="0 0 320 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M64 24C64 10.7 74.7 0 88 0s24 10.7 24 24l0 40 32 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 41.1c54.3 7.8 96 54.4 96 110.9 0 24.2-7.7 46.6-20.7 64.9 31.7 19.8 52.7 55 52.7 95.1 0 61.9-50.1 112-112 112l-16 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40-32 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40-22.3 0C18.7 448 0 429.3 0 406.3L0 101.6C0 80.8 16.8 64 37.6 64L64 64 64 24zm0 200l112 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-112 0 0 96zm112 64l-112 0 0 96 144 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-32 0z"
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
