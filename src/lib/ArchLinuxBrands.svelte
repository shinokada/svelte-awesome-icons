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

  const ariaDescribedby = $derived(desc?.id && desc.desc ? desc.id : undefined);
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
  aria-describedby={ariaDescribedby}
  viewBox="0 0 576 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M288.7-7.8c-24.1 59-38.6 97.7-65.4 155 16.4 17.4 36.6 37.6 69.4 60.5-35.2-14.5-59.2-28.9-77.2-44-34.3 71.6-88.1 173.5-197.2 369.4 85.7-49.5 152.2-80 214.1-91.6-2.7-11.4-4.1-23.8-4-36.7l.1-2.7c1.4-54.9 29.9-97.2 63.8-94.4s60.2 49.8 58.8 104.7c-.3 10.3-1.4 20.2-3.4 29.4 61.2 12 127 42.4 211.6 91.2-16.7-30.7-31.6-58.3-45.8-84.7-22.4-17.4-45.7-39.9-93.3-64.4 32.7 8.5 56.3 18.3 74.5 29.3-144.5-269.1-156.2-304.8-205.8-421.1z"
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
