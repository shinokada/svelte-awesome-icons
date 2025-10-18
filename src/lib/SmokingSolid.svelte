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
  viewBox="0 0 576 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M360 0c13.3 0 24 10.7 24 24l0 19c0 40.3 16 79 44.5 107.5l21 21C469 191 480 217.4 480 245l0 19c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-19c0-14.9-5.9-29.1-16.4-39.6l-21-21C357.1 146.9 336 96 336 43l0-19c0-13.3 10.7-24 24-24zM552 288c-13.3 0-24-10.7-24-24l0-19c0-40.3-16-79-44.5-107.5l-21-21C443 97 432 70.6 432 43l0-19c0-13.3 10.7-24 24-24s24 10.7 24 24l0 19c0 14.9 5.9 29.1 16.4 39.6l21 21C554.9 141.1 576 192 576 245l0 19c0 13.3-10.7 24-24 24zM320 448l96 0 0-32-96 0 0 32zM0 416c0-35.3 28.7-64 64-64l384 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32L64 512c-35.3 0-64-28.7-64-64l0-32zm576-40l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24s24 10.7 24 24z"
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
