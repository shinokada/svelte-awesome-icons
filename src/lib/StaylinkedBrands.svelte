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
    d="M386.7 292.5l2.7 2.7-170-167.3c-3.5-3.5-9.7-3.7-13.8-.5L148.3 171c-4.2 3.2-4.6 8.7-1.1 12.2l68.1 64.3c3.6 3.5 9.9 3.7 14 .5l.1-.1c4.1-3.2 10.4-3 14 .5l84 81.3c3.6 3.5 3.2 9-.9 12.2l-93.2 74c-4.2 3.3-10.5 3.1-14.2-.4L67.2 268c-3.5-3.5-9.7-3.7-13.9-.5L7.5 302.4c-4.2 3.2-4.7 8.7-1.2 12.2L215 510.7s7.4 6.8 17.3-.8L430.3 346c4-3.2 4.4-8.7 .7-12.2l-44.3-41.3zm54.5-83.4L230.7 2.5c-1.5-1.2-8-5.5-16.3 1.1L7.6 165.7c-4.2 3.2-4.8 8.7-1.2 12.2l42.3 41.7 171.7 165.1c3.7 3.5 10.1 3.7 14.3 .4l50.2-38.8-.3-.3 7.7-6c4.2-3.2 4.6-8.7 .9-12.2l-57.1-54.4c-3.6-3.5-10-3.7-14.2-.5l-.1 .1c-4.2 3.2-10.5 3.1-14.2-.4L113 180.8c-3.6-3.5-3.1-8.9 1.1-12.2l92.2-71.5c4.1-3.2 10.3-3 13.9 .5l160.4 159c3.7 3.5 10 3.7 14.1 .5l45.8-35.8c4.1-3.2 4.4-8.7 .7-12.2z"
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
