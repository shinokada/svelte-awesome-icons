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
    d="M199 7c9.4-9.4 24.6-9.4 33.9 0l89.4 89.4 55-55c12.5-12.5 32.8-12.5 45.3 0l48 48c12.5 12.5 12.5 32.8 0 45.3l-55 55 89.4 89.4c9.4 9.4 9.4 24.6 0 33.9l-96 96c-9.4 9.4-24.6 9.4-33.9 0l-89.4-89.4-15.5 15.5c11.4 24.6 17.8 52 17.8 80.9 0 31.7-7.7 61.5-21.2 87.8-4.7 9-16.7 10.3-23.8 3.1l-96.3-96.3-60 60c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l60-60-96.3-96.3c-7.2-7.2-5.9-19.2 3.1-23.8 26.3-13.6 56.2-21.2 87.8-21.2 28.9 0 56.3 6.4 80.9 17.8L192.4 226.3 103 137c-9.4-9.4-9.4-24.6 0-33.9L199 7zm17 50.9l-62.1 62.1 72.4 72.4 62.1-62.1-72.4-72.4zM392 358.1l62.1-62.1-72.4-72.4-62.1 62.1 72.4 72.4z"
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
