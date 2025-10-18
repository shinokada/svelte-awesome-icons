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
    d="M41-25C31.6-34.3 16.4-34.3 7-25S-2.3-.4 7 9L535 537c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.6-96.6c44.4-43.2 71.6-101.8 71.6-166.5 0-132.5-114.6-240-256-240-63 0-120.8 21.4-165.4 56.8L41-25zm19.4 155C42.2 163 32 200.3 32 239.9 32 294.2 51.2 344.2 83.6 384.4L34.8 476.7c-4.8 9-3.3 20 3.6 27.5S56.1 514 65.5 510l118.4-50.7c31.8 13.3 67.1 20.7 104.1 20.7 36.4 0 70.9-7.1 102.3-19.9L60.3 130.1z"
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
