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
    d="M464-32c0 17.7 14.3 32 32 32l34.7 0-63 63c-28.4-19.5-62.7-31-99.8-31-97.2 0-176 78.8-176 176 0 86.3 62.1 158.1 144 173.1l0 34.9-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-34.9c81.9-15 144-86.8 144-173.1 0-37-11.4-71.4-31-99.8l63-63 0 34.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-112c0-17.7-14.3-32-32-32L496-64c-17.7 0-32 14.3-32 32zM368 96a112 112 0 1 1 0 224 112 112 0 1 1 0-224zM190.9-21.9C188.4-28 182.6-32 176-32s-12.4 4-14.9 10.1l-29.4 74-76.2-23.1c-6.3-1.9-13.1 .2-17.2 5.3S33.8 46.5 37 52.2l39.5 69.1-65.6 45.1c-5.4 3.7-8 10.3-6.5 16.7s6.7 11.2 13.1 12.2l78.7 12.2-5.6 79.4c-.5 6.5 3.1 12.7 9 15.5s12.9 1.8 17.8-2.6L152.1 268c-5.3-19.1-8.1-39.2-8.1-60 0-65.4 28-124.2 72.6-165.1L190.9-21.9z"
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
