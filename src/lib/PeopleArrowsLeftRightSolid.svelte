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
    d="M32 64A64 64 0 1 1 160 64 64 64 0 1 1 32 64zM0 224c0-35.3 28.7-64 64-64l64 0c3.2 0 6.4 .2 9.5 .7L93.1 205.1C65 233.2 65 278.8 93.1 306.9l56 56c3.4 3.4 7 6.4 10.9 9l0 92.1c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-120.6C12.9 332.4 0 311.7 0 288l0-64zM352 64a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm66.9 141.1l-44.4-44.4c3.1-.5 6.3-.7 9.5-.7l64 0c35.3 0 64 28.7 64 64l0 64c0 23.7-12.9 44.4-32 55.4L480 464c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-92.1c3.9-2.6 7.5-5.6 10.9-9l56-56c28.1-28.1 28.1-73.7 0-101.8zM302.8 177.8c9-3.7 19.3-1.7 26.2 5.2l56 56c9.4 9.4 9.4 24.6 0 33.9l-56 56c-6.9 6.9-17.2 8.9-26.2 5.2S288 321.7 288 312l0-24-64 0 0 24c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-56-56c-9.4-9.4-9.4-24.6 0-33.9l56-56c6.9-6.9 17.2-8.9 26.2-5.2S224 190.3 224 200l0 24 64 0 0-24c0-9.7 5.8-18.5 14.8-22.2z"
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
