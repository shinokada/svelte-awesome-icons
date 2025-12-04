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
  viewBox="0 0 384 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M310.4 242.6c27.7-14.2 45.4-39.4 41.3-81.3-5.4-57.4-52.5-76.6-114.8-81.9l0-79.4-48.5 0 0 77.2c-12.6 0-25.5 .3-38.4 .6l0-77.8-48.5 0 0 79.4c-17.8 .5-38.6 .3-97.4 0l0 51.7c38.3-.7 58.4-3.1 63 21.4l0 217.4c-2.9 19.5-18.5 16.7-53.3 16.1L4 443.7c88.5 0 97.4 .3 97.4 .3l0 68 48.5 0 0-67.1c13.2 .3 26.2 .3 38.4 .3l0 66.7 48.5 0 0-68c81.3-4.4 135.6-24.9 142.9-101.5 5.7-61.4-23.3-88.9-69.3-99.9zM150.8 134.6c27.4 0 113.1-8.5 113.1 48.5 0 54.5-85.7 48.2-113.1 48.2l0-96.7zm0 251.8l0-106.5c32.8 0 133.1-9.1 133.1 53.3 0 60.2-100.4 53.3-133.1 53.3z"
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
