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
    d="M224.4 8.3C244-2.8 268-2.8 287.6 8.3l176 99.7c20 11.4 32.4 32.6 32.4 55.7l0 197.4c0 23-12.4 44.3-32.4 55.7l-176 99.7c-19.6 11.1-43.6 11.1-63.1 0l-176-99.7C28.4 405.5 16 384.2 16 361.2l0-197.4c0-23 12.4-44.3 32.4-55.7l176-99.7zM102.6 155.6c-8.8-3.1-18.8 .3-23.8 8.6s-3.2 18.7 3.6 25l3.2 2.4 150.2 90.2 0 148.7c0 11 9 20 20 20 11 0 20-9 20-20l0-148.7 150.3-90.2c9.5-5.7 12.6-18 6.9-27.4s-18-12.5-27.4-6.9l-149.7 89.8-149.7-89.8-3.7-1.7z"
  />
</svg>
