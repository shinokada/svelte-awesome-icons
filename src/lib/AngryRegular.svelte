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

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
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
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-144c24.1 0 45.4 11.8 58.5 30 7.7 10.8 22.7 13.2 33.5 5.5s13.2-22.7 5.5-33.5c-21.7-30.2-57.3-50-97.5-50s-75.7 19.8-97.5 50c-7.7 10.8-5.3 25.8 5.5 33.5s25.8 5.3 33.5-5.5c13.1-18.2 34.4-30 58.5-30zm-80-96c17.7 0 32-14.3 32-32l0-.3 9.7 3.2c10.5 3.5 21.8-2.2 25.3-12.6s-2.2-21.8-12.6-25.3l-96-32c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3l28.9 9.6c-4.1 5.4-6.6 12.1-6.6 19.4 0 17.7 14.3 32 32 32zm192-32c0-7.3-2.4-14-6.6-19.4l28.9-9.6c10.5-3.5 16.1-14.8 12.6-25.3s-14.8-16.1-25.3-12.6l-96 32c-10.5 3.5-16.1 14.8-12.6 25.3s14.8 16.1 25.3 12.6l9.7-3.2 0 .3c0 17.7 14.3 32 32 32s32-14.3 32-32z"
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
