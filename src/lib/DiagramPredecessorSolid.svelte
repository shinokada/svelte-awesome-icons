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
    d="M289.2 137.9c2.5-6 8.3-9.9 14.8-9.9l40 0 0-24c0-13.3-10.7-24-24-24l-98 0c1.3 5.1 2 10.5 2 16l0 64c0 35.3-28.7 64-64 64l-96 0c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l256 0c39.8 0 72 32.2 72 72l0 24 40 0c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-64 64c-6.2 6.2-16.4 6.2-22.6 0l-64-64c-4.6-4.6-5.9-11.5-3.5-17.4zM384 352l-320 0 0 64 320 0 0-64zm64 64c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l320 0c35.3 0 64 28.7 64 64l0 64z"
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
