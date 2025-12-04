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
    d="M496.2 206.8c-10.7-4.5-22.2-6.8-33.8-6.8L362 200 248 48 296 48c13.3 0 24-10.7 24-24S309.3 0 296 0L152 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l8 0 0 152-54.4 0-52.8-66c-3-3.8-7.6-6-12.5-6L16 128c-8.8 0-16 7.2-16 16l0 88 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 88c0 8.8 7.2 16 16 16l24.3 0c4.9 0 9.5-2.2 12.5-6l52.8-66 54.4 0 0 152-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 114-152 100.4 0c11.6 0 23.1-2.3 33.8-6.8l65-27.1c8.9-3.7 14.8-12.5 14.8-22.2s-5.8-18.4-14.8-22.2l-65-27.1z"
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
