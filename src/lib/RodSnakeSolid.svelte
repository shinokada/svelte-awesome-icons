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
    d="M192 32l0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 64 0c53 0 96 43 96 96s-43 96-96 96l-16 0 0-64 16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0 192 32 0c53 0 96 43 96 96 0 47.6-34.6 87.1-80 94.7l0-67c9.6-5.5 16-15.9 16-27.7 0-17.7-14.3-32-32-32l-32 0 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-64-32 0c-53 0-96-43-96-96 0-47.6 34.6-87.1 80-94.7l0 67c-9.6 5.5-16 15.9-16 27.7 0 17.7 14.3 32 32 32l32 0 0-192-72.6 0c-11.1 19.1-31.7 32-55.4 32l-16 0C21.5 128 0 106.5 0 80S21.5 32 48 32l144 0z"
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
