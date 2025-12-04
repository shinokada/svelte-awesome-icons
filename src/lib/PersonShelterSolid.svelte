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
    d="M271.9 4.2c-9.8-5.6-21.9-5.6-31.8 0l-224 128C6.2 137.9 0 148.5 0 160L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32L64 178.6 256 68.9 448 178.6 448 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-11.5-6.2-22.1-16.1-27.8l-224-128zM256 208a40 40 0 1 0 0-80 40 40 0 1 0 0 80zm-8 192l16 0 0 88c0 13.3 10.7 24 24 24s24-10.7 24-24l0-174.5 26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-33.2-61.7C329.7 245.1 294.4 224 256 224s-73.7 21.1-91.9 54.9l-33.2 61.7c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L200 313.5 200 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-88z"
  />
</svg>
