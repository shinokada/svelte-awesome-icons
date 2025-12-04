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
  viewBox="0 0 640 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M192 64c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-320 0c-35.3 0-64-28.7-64-64l0-224zM320 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm156.5 11.5C472.1 100.4 464.4 96 456 96s-16.1 4.4-20.5 11.5l-54 88.3-17.9-25.6c-4.5-6.4-11.8-10.2-19.7-10.2s-15.2 3.8-19.7 10.2l-56 80c-5.1 7.3-5.8 16.9-1.6 24.8S279.1 288 288 288l256 0c8.7 0 16.7-4.7 20.9-12.3s4.1-16.8-.5-24.3l-88-144zM144 128l0 160c0 61.9 50.1 112 112 112l192 0 0 16c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64l80 0zM52 196l0 24c0 8.8 7.2 16 16 16l24 0c8.8 0 16-7.2 16-16l0-24c0-8.8-7.2-16-16-16l-24 0c-8.8 0-16 7.2-16 16zm16 80c-8.8 0-16 7.2-16 16l0 24c0 8.8 7.2 16 16 16l24 0c8.8 0 16-7.2 16-16l0-24c0-8.8-7.2-16-16-16l-24 0zm0 96c-8.8 0-16 7.2-16 16l0 24c0 8.8 7.2 16 16 16l24 0c8.8 0 16-7.2 16-16l0-24c0-8.8-7.2-16-16-16l-24 0z"
  />
</svg>
