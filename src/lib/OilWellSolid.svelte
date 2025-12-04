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
    d="M528.3 61.3c-11.4-42.7-55.3-68-98-56.6L414.9 8.8C397.8 13.4 387.7 31 392.3 48l24.5 91.4-108.2 28.1-6.3-18.1C297.7 136.6 285.6 128 272 128s-25.7 8.6-30.2 21.4l-13.6 39-132.2 34.3 0-38.6c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 264-16 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-137.3 0-61.4-175.4-62.2 16.1 22.1 63.2-66.6 0 19.9-56.9-74.6 19.3-46.7 133.5-41.3 0 0-159.2 337.4-87.5 25.2 94c4.6 17.1 22.1 27.2 39.2 22.6l15.5-4.1c42.7-11.4 68-55.3 56.6-98L528.3 61.3zM205.1 448l16.8-48 100.2 0 16.8 48-133.8 0z"
  />
</svg>
