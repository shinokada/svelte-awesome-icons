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
    d="M344-32c66.3 0 120 53.7 120 120l0 6.2c29.3 12.2 48 41.3 48 76.9 0 27.9-25.3 74.8-66 111.7-3.8 3.5-8.8 5.3-14 5.3s-10.2-1.8-14-5.3c-40.7-36.8-66-83.7-66-111.7 0-35.6 18.7-64.7 48-76.9l0-6.2c0-30.9-25.1-56-56-56s-56 25.1-56 56l0 424c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-296c0-30.9-25.1-56-56-56s-56 25.1-56 56l0 38.2c29.3 12.2 48 41.3 48 76.9 0 27.9-25.3 74.8-66 111.7-3.8 3.5-8.8 5.3-14 5.3s-10.2-1.8-14-5.3C25.3 405.9 0 359 0 331.1 0 295.4 18.7 266.4 48 254.2L48 216c0-66.3 53.7-120 120-120 20.2 0 39.3 5 56 13.8L224 88c0-66.3 53.7-120 120-120z"
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
