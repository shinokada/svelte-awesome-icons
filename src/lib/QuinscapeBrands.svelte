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
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M313.7 474.6l-1 0c-41.9 0-82.1-16.7-111.8-46.3s-46.3-69.9-46.3-111.8 16.7-82.1 46.3-111.8 69.9-46.3 111.8-46.3c94.9 0 168.2 83.1 157 176.6 4 5.1 8.2 9.6 11.2 15.3 13.4-30.3 20.3-62.4 20.3-97.7 0-135.1-109.5-244.6-244.6-244.6S12.1 117.5 12.1 252.6 121.6 497.2 256.6 497.2c23.8 .2 47.6-3.2 70.4-10.1-5.2-3.5-8.9-8.1-13.3-12.5zm78.3-169a99.2 99.2 0 1 0 0 198.4 99.2 99.2 0 1 0 0-198.4z"
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
