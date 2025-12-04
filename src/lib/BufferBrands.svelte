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
    d="M428.2 380.7L231.7 478.5c-2.3 1-4.8 1.5-7.3 1.5s-5-.5-7.3-1.5L20.5 380.7c-4-2-4-5.3 0-7.3L67.6 350c2.3-1 4.8-1.5 7.3-1.5s5 .5 7.3 1.5l134.8 67c2.3 1 4.8 1.5 7.3 1.5s5-.5 7.3-1.5l134.8-67c2.3-1 4.8-1.5 7.3-1.5s5 .5 7.3 1.5l47.1 23.4c4 2 4 5.2 0 7.2zm0-136.5l-47.1-23.4c-2.3-1-4.8-1.5-7.3-1.5s-5 .5-7.3 1.5L231.7 287.8c-2.3 1-4.8 1.5-7.3 1.5s-5-.5-7.3-1.5L82.3 220.7c-2.3-1-4.8-1.5-7.3-1.5s-5 .5-7.3 1.5L20.5 244.1c-4 2-4 5.3 0 7.3l196.5 97.8c2.3 1 4.8 1.5 7.3 1.5s5-.5 7.3-1.5l196.5-97.8c4-2 4-5.3 0-7.3zM20.5 130.4L217 220.7c4.7 1.9 10 1.9 14.7 0l196.5-90.3c4-1.9 4-4.9 0-6.7L231.7 33.4c-4.7-1.9-10-1.9-14.7 0L20.5 123.7c-4 1.8-4 4.9 0 6.7z"
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
