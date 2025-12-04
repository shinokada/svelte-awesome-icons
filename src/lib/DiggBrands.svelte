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
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M81.7 172.3l-81.7 0 0 174.4 132.7 0 0-250.7-51 0 0 76.3zm0 133.4l-30.8 0 0-92.3 30.8 0 0 92.3zM378.9 172.3l0 174.4 81.8 0 0 28.5-81.8 0 0 40.8 133.1 0 0-243.7-133.1 0zm81.8 133.4l-30.8 0 0-92.3 30.8 0 0 92.3zm-235.6 41l82.1 0 0 28.5-82.1 0 0 40.8 133.3 0 0-243.7-133.3 0 0 174.4zm51.2-133.3l30.8 0 0 92.3-30.8 0 0-92.3zM153.3 96l51.3 0 0 51-51.3 0 0-51zm0 76.3l51.3 0 0 174.4-51.3 0 0-174.4z"
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
