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
    d="M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zm53.8 185.2c-9.1-6.3-21.5-4.1-27.8 5s-4.1 21.5 5 27.8c23.9 16.7 39.4 44.3 39.4 75.5s-15.6 58.9-39.4 75.5c-9.1 6.3-11.3 18.8-5 27.8s18.8 11.3 27.8 5c34.1-23.8 56.6-63.5 56.6-108.3S296 267.5 261.8 243.7zM80 312c-8.8 0-16 7.2-16 16l0 48c0 8.8 7.2 16 16 16l24 0 27.2 34c3 3.8 7.6 6 12.5 6l.3 0c8.8 0 16-7.2 16-16l0-128c0-8.8-7.2-16-16-16l-.3 0c-4.9 0-9.5 2.2-12.5 6l-27.2 34-24 0zm128 72.2c0 10.7 10.5 18.2 18.9 11.6 12.9-10.3 21.1-26.1 21.1-43.8s-8.2-33.5-21.1-43.8c-8.4-6.7-18.9 .9-18.9 11.6l0 64.5z"
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
