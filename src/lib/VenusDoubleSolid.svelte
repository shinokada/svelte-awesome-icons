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
    d="M192 288a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM368 176c0 86.3-62.1 158.1-144.1 173.1 .1 1 .1 1.9 .1 2.9l0 64 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-64c0-1 0-1.9 .1-2.9-82-15-144.1-86.8-144.1-173.1 0-97.2 78.8-176 176-176S368 78.8 368 176zM357.5 327c14.4-15.8 26.6-33.7 36.1-53.1 16.1 9 34.7 14.1 54.5 14.1 61.9 0 112-50.1 112-112S509.9 64 448 64c-19.8 0-38.3 5.1-54.5 14.1-9.5-19.4-21.6-37.3-36.1-53.1 26.4-15.9 57.4-25 90.5-25 97.2 0 176 78.8 176 176 0 86.3-62.1 158.1-144.1 173.1 .1 .9 .1 1.9 .1 2.9l0 64 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-64c0-1 0-1.9 .1-2.9-21.1-3.9-40.9-11.5-58.6-22.2z"
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
