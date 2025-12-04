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
    d="M320-32c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zM192 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM152 96c-13.3 0-24 10.7-24 24l0 16c0 1 .1 1.9 .2 2.9-74.7 26.3-128.2 97.5-128.2 181.1 0 106 86 192 192 192s192-86 192-192c0-83.7-53.5-154.8-128.2-181.1 .1-.9 .2-1.9 .2-2.9l0-16c0-13.3-10.7-24-24-24l-80 0zM64 320a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zm448 0c0 66.9-51.3 121.8-116.6 127.5-14.3 22.8-32.4 43.1-53.4 59.9 13.5 3 27.6 4.6 42 4.6 106 0 192-86 192-192 0-83.7-53.5-154.8-128.2-181.1 .1-.9 .2-1.9 .2-2.9l0-16c0-13.3-10.7-24-24-24l-80 0c-12.3 0-22.4 9.2-23.8 21.1 30.3 19.2 56.1 45 75.2 75.4 65.4 5.8 116.6 60.6 116.6 127.5zM384 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
  />
</svg>
