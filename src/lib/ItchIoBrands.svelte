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
    d="M71.9 34.8C50.2 47.7 7.4 96.8 7 109.7l0 21.3c0 27.1 25.3 50.8 48.2 50.8 27.6 0 50.5-22.8 50.5-50 0 27.1 22.2 50 49.8 50s49-22.8 49-50c0 27.1 23.6 50 51.2 50l.5 0c27.6 0 51.2-22.8 51.2-50 0 27.1 21.5 50 49 50s49.8-22.8 49.8-50c0 27.1 23 50 50.5 50 23 0 48.3-23.8 48.3-50.8l0-21.3c-.4-12.9-43.2-62.1-64.9-75-67.4-2.3-114.2-2.7-184-2.7S91.1 33.1 71.9 34.8zM204.2 169.2c-22 38.4-77.9 38.7-99.8 .2-13.2 23.1-43.2 32.1-56 27.7-3.9 40.2-13.7 237.1 17.7 269.2 80 18.7 302.1 18.1 379.8 0 31.6-32.3 21.3-232 17.7-269.2-12.9 4.4-42.9-4.6-56-27.7-22 38.5-77.8 38.1-99.8-.2-7.1 12.5-23 28.9-51.8 28.9-10.4 .3-20.8-2.2-29.9-7.3s-16.7-12.6-21.9-21.6l0 0zm-41.6 53.8c16.5 0 31.1 0 49.2 19.8 29.3-3 58.9-3 88.2 0 18.2-19.7 32.8-19.7 49.2-19.7 52.3 0 65.2 77.5 83.9 144.4 17.3 62.2-5.5 63.7-34 63.7-42.1-1.6-65.5-32.2-65.5-62.8-39.3 6.4-101.9 8.8-155.6 0 0 30.6-23.3 61.2-65.5 62.8-28.4-.1-51.2-1.6-33.9-63.7 18.7-67 31.6-144.4 83.9-144.4l0-.1zM256 270.8s-44.4 40.8-52.4 55.2l29-1.2 0 25.3c0 1.5 21.3 .2 23.3 .2 11.6 .5 23.3 1 23.3-.2l0-25.3 29 1.2c-8-14.5-52.4-55.2-52.4-55.2l.1 0z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-awesome-icons.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop title
@prop desc
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->
