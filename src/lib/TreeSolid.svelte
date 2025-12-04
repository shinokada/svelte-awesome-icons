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
  viewBox="0 0 448 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M224-32c7 0 13.7 3.1 18.3 8.5l136 160c6.1 7.1 7.4 17.1 3.5 25.6S369.4 176 360 176l-24.9 0 75.2 88.5c6.1 7.1 7.4 17.1 3.5 25.6S401.4 304 392 304l-38.5 0 88.8 104.5c6.1 7.1 7.4 17.1 3.5 25.6S433.4 448 424 448l-168 0 0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64-168 0c-9.4 0-17.9-5.4-21.8-13.9s-2.6-18.5 3.5-25.6L94.5 304 56 304c-9.4 0-17.9-5.4-21.8-13.9s-2.6-18.5 3.5-25.6L112.9 176 88 176c-9.4 0-17.9-5.4-21.8-13.9s-2.6-18.5 3.5-25.6l136-160C210.3-28.9 217-32 224-32z"
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
