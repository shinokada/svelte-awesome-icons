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
    d="M539.9 352l-95.6 0-8.4-66.1c-2.9-23.2-15.9-43.9-35.4-56.8L252.2 131.5c-18-11.9-39.7-15.7-60.1-11.5 2.5-4.3 5.9-7.9 10.1-10.7L350.6 11.6c10.7-7 24.5-7 35.2 0l148.4 97.7c7.8 5.1 13 13.4 14.2 22.7l23.3 184c2.4 19.1-12.5 36-31.7 36zM4.8 476l23.3-184c1.2-9.3 6.3-17.6 14.2-22.7l148.4-97.7c10.7-7 24.5-7 35.2 0l148.4 97.7c7.8 5.1 13 13.4 14.2 22.7l23.3 184c2.4 19.1-12.5 36-31.7 36l-49.7 0c-11.2 0-21.5-5.8-27.3-15.4l-77-126.7c-1.7-2.8-4.8-4.6-8.1-4.6-5.3 0-9.5 4.3-9.5 9.5l0 105.2c0 17.7-14.3 32-32 32L36.5 512c-19.3 0-34.2-16.9-31.7-36z"
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
