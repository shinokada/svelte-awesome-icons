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
    d="M0 96C0 43 43 0 96 0L288 0c53 0 96 43 96 96l0 256c0 40.1-24.6 74.5-59.5 88.8l53.9 63.7c8.6 10.1 7.3 25.3-2.8 33.8s-25.3 7.3-33.8-2.8l-74-87.5-151.3 0-74 87.5c-8.6 10.1-23.7 11.4-33.8 2.8s-11.4-23.7-2.8-33.8l53.9-63.7C24.6 426.5 0 392.1 0 352L0 96zm64 32l0 96c0 17.7 14.3 32 32 32l72 0 0-160-72 0c-17.7 0-32 14.3-32 32zM216 256l72 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-72 0 0 160zM96 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm224-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
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
