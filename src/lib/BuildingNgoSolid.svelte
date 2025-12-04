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
    d="M128 0C92.7 0 64 28.7 64 64l0 384c0 35.3 28.7 64 64 64l48 0 0-112c0-35.3 28.7-64 64-64l208 0 0-272c0-35.3-28.7-64-64-64L128 0zm32 112c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM304 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM160 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM520 380c-24.3 0-44 19.7-44 44l0 80c0 24.3 19.7 44 44 44l16 0c24.3 0 44-19.7 44-44l0-80c0-24.3-19.7-44-44-44l-16 0zm-4 44c0-2.2 1.8-4 4-4l16 0c2.2 0 4 1.8 4 4l0 80c0 2.2-1.8 4-4 4l-16 0c-2.2 0-4-1.8-4-4l0-80zm-168 0l0 80c0 24.3 19.7 44 44 44l16 0c24.3 0 44-19.7 44-44l0-24c0-11-9-20-20-20l-8 0c-11 0-20 9-20 20 0 6.5 3.1 12.4 8 16l0 8c0 2.2-1.8 4-4 4l-16 0c-2.2 0-4-1.8-4-4l0-80c0-2.2 1.8-4 4-4l20.4 0c1.9 9.1 9.9 16 19.6 16 11 0 20-9 20-20 0-19.9-16.1-36-36-36l-24 0c-24.3 0-44 19.7-44 44zm-90.1-32.9c-4.1-8.3-13.5-12.7-22.5-10.5S220 390.7 220 400l0 128c0 11 9 20 20 20s20-9 20-20l0-43.3 26.1 52.2c4.1 8.3 13.5 12.7 22.5 10.5S324 537.3 324 528l0-128c0-11-9-20-20-20s-20 9-20 20l0 43.3-26.1-52.2z"
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
