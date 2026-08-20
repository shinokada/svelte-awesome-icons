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
    d="M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM243.5 240c1.2-1.9-.9-4.2-2.6-2.8l-89 79.5c-9.2 7.2-15.2 19.1-15.2 32.5 0 21.9 16 39.8 35.7 39.8l167.3 0c19.6 0 35.7-17.9 35.7-39.8 0-21.9-16.1-39.7-35.7-39.8l-126.6 0c-1.9 0-3-2.3-2.1-4.1L243.5 240zM172.4 123.1c-19.6 0-35.7 17.9-35.7 39.8s16 39.8 35.7 39.8l126.6 0c1.9 0 3.1 2.2 2.2 4.1L268.5 272c-1.2 1.9 .9 4.2 2.6 2.8l89-79.5c9.2-7.2 15.2-19.1 15.2-32.5 0-21.9-16-39.7-35.7-39.8l-167.3 0z"
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
