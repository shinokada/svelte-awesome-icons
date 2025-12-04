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
    d="M176 32c-13.3 0-24 10.7-24 24s10.7 24 24 24l152 0 0 48-220.8 0-32.8-39.4C69.9 83.2 63.1 80 56 80L24 80C15.7 80 8 84.3 3.6 91.4s-4.8 15.9-1.1 23.4l48 96C54.6 218.9 62.9 224 72 224l107.8 0 104 143.1c15.1 20.7 39.1 32.9 64.7 32.9l75.5 0c75.1 0 136-60.9 136-136S499.1 128 424 128l-48 0 0-48 152 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L176 32zM376 192l48 0c39.8 0 72 32.2 72 72s-32.2 72-72 72l-48 0 0-144zM552 416c-13.3 0-24 10.7-24 24 0 4.4-3.6 8-8 8l-272 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l272 0c30.9 0 56-25.1 56-56 0-13.3-10.7-24-24-24z"
  />
</svg>
