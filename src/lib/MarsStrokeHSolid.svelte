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

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
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
    d="M320.5 256a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zM208.5 80c86.3 0 158.1 62.1 173.1 144.1 1-.1 1.9-.1 2.9-.1l16 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 61.4 0-22.4-28c-11-13.8-8.8-33.9 5-45s33.9-8.8 45 5l64 80c9.3 11.7 9.3 28.3 0 40l-64 80c-11 13.8-31.2 16-45 5s-16-31.2-5-45l22.4-28-61.4 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-16 0c-1 0-1.9 0-2.9-.1-15 82-86.8 144.1-173.1 144.1-97.2 0-176-78.8-176-176s78.8-176 176-176z"
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
