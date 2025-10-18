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
    d="M132.3 64L106.7 192 24 192c-13.3 0-24-10.7-24-24l0-4.1c0-2.6 .4-5.1 1.2-7.6L26.5 80.4C29.8 70.6 39 64 49.3 64l83 0zm23.4 128l25.6-128 82.7 0 0 128-108.3 0zM312 64l82.7 0 25.6 128-108.3 0 0-128zm131.7 0l83 0c10.3 0 19.5 6.6 22.8 16.4l25.3 75.9c.8 2.4 1.2 5 1.2 7.6l0 4.1c0 13.3-10.7 24-24 24l-82.7 0-25.6-128zM25.7 240l524.7 0c-.4 2.1-13.3 73.4-38.9 213.7-3 16.3-17.9 27.6-34.4 26.1S448 464.6 448 448l0-16-320 0 0 16c0 16.6-12.6 30.4-29.1 31.9S67.5 470 64.5 453.7C39 313.3 26 242.1 25.7 240z"
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
