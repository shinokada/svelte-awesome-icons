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
  viewBox="0 0 448 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M0 96L0 28.5C0 21.6 5.6 16 12.5 16 14.8 16 17 16.6 19 17.8L58 41.2C82.9 56.1 111.3 64 140.3 64l167.4 0c29 0 57.5-7.9 82.3-22.8l39-23.4c1.9-1.2 4.2-1.8 6.4-1.8 6.9 0 12.5 5.6 12.5 12.5L448 96c0 35.3-28.7 64-64 64l0 64 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192-192 0 0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-64C28.7 160 0 131.3 0 96zM128 224l64 0 0-64-64 0 0 64zm128 0l64 0 0-64-64 0 0 64z"
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
