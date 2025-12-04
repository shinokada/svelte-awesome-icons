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
    d="M64 64C64 28.7 92.7 0 128 0L416 0c35.3 0 64 28.7 64 64l0 48-64 0 0-48-288 0 0 192 112 0 0 96-163.2 0C34.4 352 0 317.6 0 275.2 0 264.6 8.6 256 19.2 256L64 256 64 64zM529.9 257.9c9 9 14.1 21.2 14.1 33.9L544 464c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-256c0-26.5 21.5-48 48-48l76.1 0c12.7 0 24.9 5.1 33.9 14.1 20 20 47.9 47.9 83.9 83.9zM416 272c0 8.8 7.2 16 16 16l60.1 0-76.1-76.1 0 60.1z"
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
