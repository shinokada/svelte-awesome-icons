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
    d="M450.2 266.8c15.8 6.5 34.1 .3 42.6-14.6l2.4-4.2c27.9-48.9 23.6-118.8-31.3-154.5-126-82-289.6-82-415.6 0-54.9 35.7-59.3 105.7-31.3 154.5l2.4 4.2c8.5 14.9 26.7 21.1 42.6 14.6l81.9-33.7c13.9-5.7 22.4-19.9 20.9-34.9l-5.1-51c62.5-21 130.8-19.9 192.6 3.3l-4.8 47.7c-1.5 15 7 29.2 20.9 34.9l81.9 33.7zM32 352a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM64 416a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm352 32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM256 320a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm64 32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm128-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM128 448c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-192 0c-17.7 0-32 14.3-32 32z"
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
