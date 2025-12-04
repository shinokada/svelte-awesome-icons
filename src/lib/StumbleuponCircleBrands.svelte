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
    d="M264 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zm0 177.5c-9.8 0-17.8 8-17.8 17.8l0 106.9c0 40.9-33.9 73.9-74.9 73.9-41.4 0-74.9-33.5-74.9-74.9l0-46.5 57.3 0 0 45.8c0 10 8 17.8 17.8 17.8s17.8-7.9 17.8-17.8l0-108.4c0-40 34.2-72.1 74.7-72.1 40.7 0 74.7 32.3 74.7 72.6l0 23.7-34.1 10.1-22.9-10.7 0-20.6c.1-9.6-7.9-17.6-17.7-17.6zM431.6 309.1c0 41.4-33.5 74.9-74.9 74.9-41.2 0-74.9-33.2-74.9-74.2l0-46.8 22.9 10.7 34.1-10.1 0 47.1c0 9.8 8 17.6 17.8 17.6s17.8-7.9 17.8-17.6l0-48 57.3 0c-.1 45.9-.1 46.4-.1 46.4z"
  />
</svg>
