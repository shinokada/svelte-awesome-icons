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
    ariaLabel = 'person circle exclamation solid',
    ...restProps
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  aria-label={ariaLabel}
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
    d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-223.1L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6l29.7 0c33.7 0 64.9 17.7 82.3 46.6l44.9 74.7c-16.1 17.6-28.6 38.5-36.6 61.5c-1.9-1.8-3.5-3.9-4.9-6.3L232 256.9 232 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 240a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-192c-8.8 0-16 7.2-16 16l0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80c0-8.8-7.2-16-16-16z"
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
@prop ariaLabel = 'person circle exclamation solid'
@prop ...restProps
-->
