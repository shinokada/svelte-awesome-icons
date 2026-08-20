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
  viewBox="0 0 576 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M240 32c79.5 0 144 64.5 144 144l0 65.2c18.8-10.9 40.7-17.2 64-17.2 70.7 0 128 57.3 128 128S518.7 480 448 480c-35.8 0-68.2-14.7-91.4-38.4-28.8 42.5-77.4 70.4-132.6 70.4-17.7 0-32-14.3-32-32s14.3-32 32-32c53 0 96-43 96-96l0-176c0-44.2-35.8-80-80-80s-80 35.8-80 80l0 208c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-224c0-35.3-28.7-64-64-64-17.7 0-32-14.3-32-32S14.3 32 32 32C72.6 32 108.8 51 132.2 80.5 158.6 50.7 197.1 32 240 32zM448 288a64 64 0 1 0 0 128 64 64 0 1 0 0-128z"
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
