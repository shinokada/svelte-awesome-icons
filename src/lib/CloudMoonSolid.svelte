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
  viewBox="0 0 640 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M480 0c14.6 0 28.8 1.6 42.5 4.7 7.4 1.7 13 7.8 13.9 15.4s-3 14.9-9.8 18.3c-45.4 22.6-76.6 69.5-76.6 123.6 0 76.2 61.8 138 138 138 3.7 0 7.4-.1 11.1-.4 7.6-.6 14.7 3.6 17.8 10.6s1.5 15.1-3.9 20.4c-26 25-59.1 42.7-95.9 49.9-11.1-25.3-30.2-46.3-54.1-59.8-7.6-63.4-61.6-112.6-127.1-112.6-11.2 0-22.1 1.5-32.5 4.2-4.8-4.2-9.9-8.2-15.2-11.8-.1-2.8-.2-5.6-.2-8.4 0-106 86-192 192-192zm-.1 431.9c0 44.2-35.8 80-80 80l-271.9 0c-53 0-96-43-96-96 0-47.6 34.6-87 80-94.6-.4-52.8 42.9-97.3 96-97.3 34.9 0 65.4 18.6 82.2 46.4 13-9.1 28.8-14.4 45.8-14.4 44.2 0 80 35.8 80 80 0 5.9-.6 11.7-1.9 17.2 37.4 6.7 65.8 39.4 65.8 78.7z"
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
