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
    d="M256.5 465.4l0-31c98.3-.3 177.9-80 177.9-178.4S354.8 77.9 256.5 77.6l0-31C372 46.8 465.4 140.5 465.4 256S372 465.2 256.5 465.4zm0-108.6c55.4-.3 100.3-45.3 100.3-100.8S312 155.5 256.5 155.2l0-31c72.6 .3 131.4 59.2 131.4 131.8S329.1 387.6 256.5 387.8l0-31zm0-155.1c29.7 .3 53.8 24.5 53.8 54.3s-24 54-53.8 54.3l0-108.6zM0 256a256 256 0 1 0 512 0 256 256 0 1 0 -512 0z"
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
