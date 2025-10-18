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
    d="M480 0c17.7 0 32 14.3 32 32l96 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-96 0 0 288c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-448c0-17.7 14.3-32 32-32zM267.5 59.1L400 186.9 400 503.4c-9.4 5.4-20.3 8.6-32 8.6l-256 0c-35.3 0-64-28.7-64-64l0-144-19.9 0C12.6 304 0 291.4 0 275.9 0 268.3 3.1 261 8.6 255.7L212.5 59.1C219.9 52 229.7 48 240 48s20.1 4 27.5 11.1zM204.8 256.8l0 44-44 0c-9.7 0-17.6 7.9-17.6 17.6l0 35.2c0 9.7 7.9 17.6 17.6 17.6l44 0 0 44c0 9.7 7.9 17.6 17.6 17.6l35.2 0c9.7 0 17.6-7.9 17.6-17.6l0-44 44 0c9.7 0 17.6-7.9 17.6-17.6l0-35.2c0-9.7-7.9-17.6-17.6-17.6l-44 0 0-44c0-9.7-7.9-17.6-17.6-17.6l-35.2 0c-9.7 0-17.6 7.9-17.6 17.6z"
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
