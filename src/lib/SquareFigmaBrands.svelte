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
  viewBox="0 0 448 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM173.7 96c-33 0-59.8 26.8-59.8 59.8 0 21 10.8 39.4 27.2 50.1-16.4 10.7-27.2 29.1-27.2 50.1s10.8 39.5 27.2 50.1c-16.4 10.7-27.2 29.1-27.2 50.1 0 33.1 27.1 59.8 60.1 59.8 33.2 0 60.6-26.9 60.6-60.3l0-55.7c10.6 9.8 24.8 15.8 40.4 15.8l1.1 0c33 0 59.8-26.8 59.8-59.8 0-21-10.8-39.5-27.2-50.1 16.4-10.7 27.2-29.1 27.2-50.1 0-33-26.8-59.8-59.8-59.8L173.7 96zm41.6 219.8l0 39.9c0 22.6-18.6 41-41.3 41-22.4 0-40.7-18.2-40.7-40.5 0-22.3 18.1-40.4 40.3-40.4l41.7 0zm0-100.3l0 80.9-41.7 0c-22.3-.1-40.3-18.2-40.3-40.5 0-22.3 18.1-40.5 40.5-40.5l41.6 0zm60.8 0c22.3 0 40.5 18.1 40.5 40.5s-18.1 40.5-40.5 40.5l-1.1 0c-22.3 0-40.4-18.1-40.4-40.5s18.1-40.5 40.4-40.5l1.1 0zm-60.8-19.3l-41.6 0c-22.3 0-40.5-18.1-40.5-40.4s18.1-40.5 40.5-40.5l41.6 0 0 80.9zm60.8-80.9c22.3 0 40.5 18.1 40.5 40.5s-18.1 40.4-40.5 40.4l-41.5 0 0-80.9 41.5 0z"
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
