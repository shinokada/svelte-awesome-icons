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
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M0 64C0 28.7 28.7 0 64 0L352 0c35.3 0 64 28.7 64 64l16 0c44.2 0 80 35.8 80 80l0 96c0 44.2-35.8 80-80 80l-160 0c-8.8 0-16 7.2-16 16l0 18.7c18.6 6.6 32 24.4 32 45.3l0 96c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-96c0-20.9 13.4-38.7 32-45.3l0-18.7c0-44.2 35.8-80 80-80l160 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16l-16 0c0 35.3-28.7 64-64 64L64 192c-35.3 0-64-28.7-64-64L0 64z"
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
