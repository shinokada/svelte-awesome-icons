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
  viewBox="0 0 384 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M64 512c-29.8 0-54.8-20.4-61.9-48l61.9 0 0 48zm104 0l-56 0 0-48 56 0 0 48zm104 0l-56 0 0-48 56 0 0 48zm109.9-48c-7.1 27.6-32.1 48-61.9 48l0-48 61.9 0zM48 416l-48 0 0-48 48 0 0 48zm336 0l-48 0 0-48 48 0 0 48zM213.5 0c17 0 33.2 6.8 45.2 18.8L365.3 125.2c12 12 18.7 28.3 18.7 45.2L384 320 0 320 0 64C0 28.7 28.7 0 64 0L213.5 0zM208 152c0 13.3 10.7 24 24 24l93.5 0-117.5-117.5 0 93.5z"
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
