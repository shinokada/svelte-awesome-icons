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
    d="M296 64c6.9 0 13.5 2.7 18.3 7.6L440.4 197.7c4.9 4.9 7.6 11.5 7.6 18.3s-2.7 13.5-7.6 18.3L386.7 288 65.3 288c1.3-3.9 3.4-7.4 6.3-10.3l96.4-96.4 33.4 33.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L213.3 136 277.7 71.6c4.9-4.9 11.5-7.6 18.3-7.6zM122.7 136L26.3 232.4C9.5 249.3 0 272.1 0 296s9.5 46.7 26.3 63.6L152.4 485.7C169.3 502.5 192.1 512 216 512s46.7-9.5 63.6-26.3L485.7 279.6C502.5 262.7 512 239.9 512 216s-9.5-46.7-26.3-63.6L359.6 26.3C342.7 9.5 319.9 0 296 0s-46.7 9.5-63.6 26.3L168 90.7 118.6 41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L122.7 136z"
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
