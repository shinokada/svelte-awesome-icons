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
    d="M243.6 91.6l80.1 46.8c2.9 1.6 3 6.2 0 7.8l-95.2 55.6c-2.9 1.7-6.3 1.6-9 0l-95.2-55.6c-2.9-1.6-3-6.3 0-7.8l80.1-46.8 0-91.6-204.4 119.4 0 238.8 78.4-45.8 0-93.6c-.1-3.3 3.8-5.7 6.7-3.9l95.2 55.6c2.9 1.7 4.5 4.7 4.5 7.8l0 111.2c.1 3.3-3.8 5.7-6.7 3.9L98 346.8 19.6 392.6 224 512 428.4 392.6 350 346.8 269.9 393.6c-2.8 1.7-6.8-.5-6.7-3.9l0-111.2c0-3.3 1.8-6.3 4.5-7.8L362.9 215c2.8-1.7 6.8 .5 6.7 3.9l0 93.6 78.4 45.8 0-238.8-204.4-119.4 0 91.6z"
  />
</svg>
