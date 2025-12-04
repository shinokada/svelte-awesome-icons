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
    d="M136 0c-13.3 0-24 10.7-24 24l0 40-74.4 0C16.8 64 0 80.8 0 101.6L0 406.3c0 23 18.7 41.7 41.7 41.7l70.3 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 48 0c61.9 0 112-50.1 112-112 0-40.1-21.1-75.3-52.7-95.1 13.1-18.3 20.7-40.7 20.7-64.9 0-61.9-50.1-112-112-112l-16 0 0-40c0-13.3-10.7-24-24-24zM112 128l0 96-48 0 0-96 48 0zm48 96l0-96 16 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0zm-48 64l0 96-48 0 0-96 48 0zm48 96l0-96 48 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-48 0z"
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
