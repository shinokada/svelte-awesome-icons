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
  viewBox="0 0 576 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M185 121c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-31 31 0-102.1C120 2.7 109.3-8 96-8S72 2.7 72 16l0 102.1-31-31C31.6 77.7 16.4 77.7 7 87S-2.3 111.6 7 121l72 72c9.4 9.4 24.6 9.4 33.9 0l72-72zM155.8 260.6L132.1 448 32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l512 0c17.7 0 32-14.3 32-32 0-2.8-.4-5.5-1-8L548.2 260.7c-1.2-9.7-6.9-18.4-15.3-23.4L367.4 137.9c-10.2-6.1-22.9-6.1-33.1 .1L170.9 237.3c-8.3 5.1-13.9 13.7-15.1 23.3zM448 448l-97.1 0 0-149.4c0-5.9 4.7-10.6 10.6-10.6 4 0 7.7 2.3 9.5 5.9L448 448z"
  />
</svg>
