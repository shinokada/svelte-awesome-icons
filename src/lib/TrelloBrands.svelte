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
    d="M392.3 32L56.1 32c-31 0-56.1 25.1-56.1 56-.1 0 0-4 0 336 0 30.9 25.1 56 56 56l336.2 0c30.8-.2 55.7-25.2 55.7-56l0-336c.1-30.8-24.8-55.8-55.6-56zM197 371.3c-.2 14.7-12.1 26.6-26.9 26.6l-82.7 0c-14.8 .1-26.9-11.8-27-26.6l0-254.2c0-14.8 12-26.9 26.9-26.9l82.9 0c14.8 0 26.9 12 26.9 26.9l0 254.2-.1 0zm193.1-112c0 14.8-12 26.9-26.9 26.9l-81 0c-14.8 0-26.9-12-26.9-26.9l0-142.1c0-14.8 12-26.9 26.8-26.9l81.1 0c14.8 0 26.9 12 26.9 26.9l0 142.1z"
  />
</svg>
