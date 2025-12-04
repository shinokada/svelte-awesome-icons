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
    d="M64.4 391.8C-15 303.6-7.6 167.4 81.1 87.6s224.8-73 304.2 15.2 72 224.4-16.6 304.1c-18.7 16.9 64 43.1 42 52.3-82.1 34.2-253.9 35-346.2-67.5l0 0zM277.7 180.2l38.5-40.9c-9.6-8.9-32-26.8-76.2-27.6-52.3-.9-95.9 28.3-96.8 80-.2 11.3 .3 36.7 29.4 54.8 34.5 21.4 86.5 21.5 86 52.3-.4 21.3-26.4 25.8-38.6 25.6-3 0-30.2-.5-47.6-24.6l-40 42.6c28.2 27 59 32.6 83.5 33 10.2 .2 96.4 .3 97.8-81 .3-15.8-2.1-39.7-28.9-56.6-34.4-21.6-85-19.4-84.4-49.7 .4-23.3 31-25.4 37.5-25.3 .4 0 26.6 .3 39.6 17.4l0 0z"
  />
</svg>
