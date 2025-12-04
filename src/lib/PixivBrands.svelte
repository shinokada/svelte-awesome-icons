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
    d="M96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96L96 32zm77.7 217.3a60.1 60.1 0 1 0 120.3 0 60.1 60.1 0 1 0 -120.3 0zM119.1 387.8c-.3-.8-.5-1.7-.5-2.6l0-244.3c0-1.8 .7-3.6 2-4.9s3-2 4.9-2l16.9 0c1.2 0 2.3 .3 3.3 .8s1.9 1.3 2.5 2.3l14 21.8c19.7-15.6 44.5-25 71.6-25 63.6 0 115.2 51.6 115.2 115.2S297.5 364.5 233.8 364.5c-22 0-42.6-6.2-60.1-16.9l0 37.6c0 .9-.2 1.8-.5 2.6s-.9 1.6-1.5 2.2-1.4 1.1-2.2 1.5-1.7 .5-2.6 .5l-41.3 0c-.9 0-1.8-.2-2.6-.5s-1.6-.9-2.2-1.5-1.1-1.4-1.5-2.2z"
  />
</svg>
