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

  const ariaDescribedby = $derived(desc?.id && desc.desc ? desc.id : undefined);
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
  aria-describedby={ariaDescribedby}
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M383.5 10.8c61.8-.2 112.3 50.6 112.3 112.9-.2 2.7 0 0-.1 3.3l.3 .3c-1.5 89.9-53 168.4-127.4 208.5l0 52.8c0 62.6-51.1 113.5-113.7 112.9-62-.6-111.4-52.2-111.4-114.3l0-51.2c-40.7-21.9-74.5-55.2-97-95.6 23.2 16.5 51.7 26 82 25.9 78.6-.2 142.2-64 142.3-142.5 .1-62.3 50.5-112.7 112.9-112.9zm-255 225.8a112.9 112.9 0 1 1 0-225.8 112.9 112.9 0 1 1 0 225.8z"
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
