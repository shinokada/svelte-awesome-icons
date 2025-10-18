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

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
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
    d="M633.5 256c0 3.1-1.7 6.1-4.5 7.5L539.9 317c-1.4 .8-2.8 1.4-4.5 1.4-1.4 0-3.1-.3-4.5-1.1-2.8-1.7-4.5-4.5-4.5-7.8l0-35.6-230.7 0c25.3 39.6 40.5 106.9 69.6 106.9l26.7 0 0-26.8c0-5 3.9-8.9 8.9-8.9l89.1 0c5 0 8.9 3.9 8.9 8.9l0 89.1c0 5-3.9 8.9-8.9 8.9l-89.1 0c-5 0-8.9-3.9-8.9-8.9l0-26.7-26.7 0c-75.4 0-81.1-142.5-124.7-142.5l-100.3 0c-8.1 30.6-35.9 53.5-69 53.5-39.3-.1-71.3-32.1-71.3-71.4s32-71.3 71.3-71.3c33.1 0 61 22.8 69 53.5 39.1 0 43.9 9.5 74.6-60.4 40.1-89.1 58.1-82.1 108.9-82.1 7.5-20.9 27-35.6 50.4-35.6 29.5 0 53.5 23.9 53.5 53.5s-23.9 53.5-53.5 53.5c-23.4 0-42.9-14.8-50.4-35.6l-29.8 0c-29.1 0-44.3 67.4-69.6 106.9l302.1 0 0-35.6c0-3.3 1.7-6.1 4.5-7.8s6.4-1.4 8.9 .3L629 248.8c2.8 1.1 4.5 4.1 4.5 7.2z"
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
