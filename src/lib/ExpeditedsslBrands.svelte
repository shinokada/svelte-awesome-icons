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
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M256 43.4a212.6 212.6 0 1 0 0 425.2 212.6 212.6 0 1 0 0-425.2zM158.6 176.3c0-53.7 43.7-97.4 97.4-97.4s97.4 43.7 97.4 97.4l0 26.6c0 5-3.9 8.9-8.9 8.9l-17.7 0c-5 0-8.9-3.9-8.9-8.9l0-26.6c0-82.1-124-82.1-124 0l0 26.6c0 5-3.9 8.9-8.9 8.9l-17.7 0c-5 0-8.9-3.9-8.9-8.9l0-26.6 .2 0zM397.7 380c0 9.7-8 17.7-17.7 17.7l-248 0c-9.7 0-17.7-8-17.7-17.7l0-141.7c0-9.7 8-17.7 17.7-17.7l248 0c9.7 0 17.7 8 17.7 17.7l0 141.7zm-248-137.3l0 132.9c0 2.5-1.9 4.4-4.4 4.4l-8.9 0c-2.5 0-4.4-1.9-4.4-4.4l0-132.9c0-2.5 1.9-4.4 4.4-4.4l8.9 0c2.5 0 4.4 1.9 4.4 4.4zm141.7 48.7c0 13-7.2 24.4-17.7 30.4l0 31.6c0 5-3.9 8.9-8.9 8.9l-17.7 0c-5 0-8.9-3.9-8.9-8.9l0-31.6c-10.5-6.1-17.7-17.4-17.7-30.4 0-19.7 15.8-35.4 35.4-35.4s35.5 15.8 35.5 35.4zM256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zm0 17.7a230.3 230.3 0 1 1 0 460.6 230.3 230.3 0 1 1 0-460.6z"
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
