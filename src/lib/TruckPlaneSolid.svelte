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
    d="M144 48c0-26.5 21.5-48 48-48s48 21.5 48 48l0 320c0 32.5 12.1 62.1 32 84.7l0 27.3c0 7.1 .9 14.1 2.7 20.7L192 480 83.9 507C73.8 509.6 64 501.9 64 491.5l0-19.8c0-4.9 2.2-9.5 6-12.5l74-59.2 0-57.6-122.1 48.8C11.4 395.4 0 387.7 0 376.4l0-44c0-8 3-15.6 8.3-21.5L144 161.6 144 48zm224 80l192 0c44.2 0 80 35.8 80 80l0 160c0 26.2-12.6 49.4-32 64l0 48c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-160 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-48c-19.4-14.6-32-37.8-32-64l0-160c0-44.2 35.8-80 80-80zm0 176l192 0 0-32c0-17.7-14.3-32-32-32l-128 0c-17.7 0-32 14.3-32 32l0 32zm0 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm216-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"
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
