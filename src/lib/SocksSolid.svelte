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
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M252.8 0L176 0c-26.5 0-48 21.5-48 48l0 16 112 0 0-16c0-17.5 4.7-33.9 12.8-48zM128 112l0 128c0 20.1-9.5 39.1-25.6 51.2l-64 48c-24.2 18.1-38.4 46.6-38.4 76.8 0 53 43 96 96 96 15.4 0 30.5-3.7 44-10.7-17.6-23.9-28-53.4-28-85.3 0-45.3 21.3-88 57.6-115.2l64-48c4-3 6.4-7.8 6.4-12.8l0-128-112 0zm160 0l0 128c0 20.1-9.5 39.1-25.6 51.2l-64 48c-24.2 18.1-38.4 46.6-38.4 76.8 0 53 43 96 96 96 20.8 0 41-6.7 57.6-19.2l115.2-86.4C461 382.2 480 344.3 480 304l0-192-192 0zM480 64l0-16c0-26.5-21.5-48-48-48L336 0c-26.5 0-48 21.5-48 48l0 16 192 0z"
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
