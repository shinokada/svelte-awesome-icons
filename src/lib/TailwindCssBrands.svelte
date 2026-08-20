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
  viewBox="0 0 640 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M320 64c-85.3 0-138.7 42.7-160 128 32-42.7 69.3-58.7 112-48 24.3 6.1 41.7 23.8 61 43.3 31.4 31.8 67.7 68.7 147 68.7 85.3 0 138.7-42.7 160-128-32 42.7-69.3 58.7-112 48-24.3-6.1-41.7-23.8-61-43.3-31.4-31.8-67.7-68.7-147-68.7zM160 256c-85.3 0-138.7 42.7-160 128 32-42.7 69.3-58.7 112-48 24.3 6.1 41.7 23.8 61 43.3 31.4 31.8 67.7 68.7 147 68.7 85.3 0 138.7-42.7 160-128-32 42.7-69.3 58.7-112 48-24.3-6.1-41.7-23.8-61-43.3-31.4-31.8-67.7-68.7-147-68.7z"
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
