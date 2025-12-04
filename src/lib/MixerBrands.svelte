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
    d="M82.6 76.1c-3.8-5.1-8.7-9.4-14.2-12.5s-11.7-5.1-18.1-5.7-12.8 .1-18.8 2.2-11.6 5.3-16.3 9.6c-17.6 16.2-19 43.5-4.8 62.8l91.8 123-92.3 124.1c-14.2 19.3-13.1 46.6 4.7 62.8 4.7 4.3 10.3 7.6 16.3 9.6s12.5 2.8 18.8 2.2 12.5-2.5 18.1-5.7 10.4-7.4 14.2-12.5L210.9 262.7c1.5-2.1 2.3-4.6 2.3-7.1s-.8-5-2.3-7.1L82.6 76.1zM438.2 379.6l-92.3-124.1 91.8-123c14.2-19.2 12.8-46.6-4.7-62.8-4.7-4.3-10.3-7.6-16.3-9.6s-12.5-2.8-18.8-2.2-12.5 2.5-18.1 5.7-10.4 7.4-14.2 12.5l-128 172.1c-1.5 2.1-2.3 4.6-2.3 7.1s.8 5 2.3 7.1L366 435.9c3.8 5.1 8.7 9.4 14.2 12.5s11.7 5.1 18.1 5.7 12.8-.1 18.8-2.2 11.6-5.3 16.3-9.6c17.8-16.2 19-43.5 4.7-62.8z"
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
