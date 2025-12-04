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
  viewBox="0 0 256 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M110 0C49.2 0 0 49.2 0 110 0 133.7 7.6 155.8 20.5 174 7.6 192 0 214.1 0 238 0 291.7 38.9 337.6 91.9 346.4l61.7 10.3c22.2 3.7 38.4 22.9 38.4 45.3 0 25.4-20.6 46-46 46l-98 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l98 0c60.7 0 110-49.2 110-110 0-23.7-7.6-45.9-20.5-64 12.9-18 20.5-40.1 20.5-64 0-53.8-38.9-99.6-91.9-108.5l-61.7-10.3C80.2 151.6 64 132.4 64 110 64 84.6 84.6 64 110 64l98 0c17.7 0 32-14.3 32-32S225.7 0 208 0L110 0zm74.7 299.1c-6.5-2.4-13.4-4.3-20.5-5.5l-61.7-10.3c-22.2-3.7-38.4-22.9-38.4-45.3 0-9.2 2.7-17.8 7.4-25 6.5 2.4 13.4 4.3 20.5 5.5l61.7 10.3c22.2 3.7 38.4 22.9 38.4 45.3 0 9.2-2.7 17.8-7.4 25z"
  />
</svg>
