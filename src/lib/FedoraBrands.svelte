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
    d="M0 255.8C.1 132.2 100.3 32 224 32S448 132.3 448 256 347.8 479.9 224.1 480L50.9 480C22.8 480 .1 457.3 0 429.2l0 0 0-173.4 0 0zm342.6-63.1c0-39.7-35.6-68.5-73.2-68.5-34.9 0-65.8 26.3-70.1 59.9-.2 3.8-.4 5-.4 8.5-.1 21.1 0 42.8-.8 64.4 .9 26.1 1 52.1 0 76.6 0 27.1-19.4 45.5-44.7 45.5s-45.8-20.2-45.8-45.5c.5-27.7 22.6-45.3 48.5-46.1l.2 0 26.3-.2 0-37.3-26.3 .2c-47.1-.4-84.6 36.5-85.9 83.4 0 45.6 37.5 82.9 83 82.9 43 0 78.7-33.6 82.6-75.6l.2-53.5 32.6-.3c25.3 .2 25-37.8-.2-37.3l-32.4 .3c0-6.4 .1-12.8 .1-19.2 .1-12.7 .1-25.4-.1-38.2 .1-16.5 15.8-31.2 33.2-31.2 17.5 0 35.9 8.7 35.9 31.2 0 3.2-.1 5.1-.3 6.3-1.9 10.5 5.2 20.4 15.7 21.9 10.6 1.5 20.2-6.1 21.2-16.6 .6-4.2 .7-7.9 .7-11.6z"
  />
</svg>
