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
  viewBox="0 0 384 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M232 32c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 26.5C88.8 73.9 16 156.4 16 256S88.8 438.1 184 453.5l0 26.5c0 13.3 10.7 24 24 24s24-10.7 24-24l0-24.6c46.8-3.7 89.1-23.6 121.3-53.9 12.9-12.1 13.4-32.4 1.3-45.2s-32.4-13.4-45.2-1.3c-20.7 19.6-47.6 32.7-77.3 36.2l0-270.1c29.8 3.5 56.6 16.6 77.3 36.2 12.9 12.1 33.1 11.5 45.2-1.3s11.5-33.1-1.3-45.2C321.1 80.2 278.8 60.3 232 56.6L232 32zm-48 91.8l0 264.4C124.3 373.8 80 320.1 80 256s44.3-117.8 104-132.2z"
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
