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
    d="M97 127l67.4-67.4c38.2-38.2 90-59.6 144-59.6 112.5 0 203.7 91.2 203.7 203.6 0 46.4-15.8 91.1-44.5 127-23.6-16.8-52.4-26.7-83.5-26.7-31.1 0-59.9 9.9-83.4 26.6L97 127zM240 448c0 9.7 1 19.1 2.8 28.2-19.8-5.2-38-15.5-52.7-30.2-12.2-12.2-31.9-12.2-44.1 0L96.6 495.4c-10.6 10.6-25 16.6-40 16.6-31.2 0-56.6-25.3-56.6-56.6 0-15 6-29.4 16.6-40l49.4-49.4c12.2-12.2 12.2-31.9 0-44.1-21.7-21.7-33.9-51.2-33.9-81.9 0-29.4 11.1-57.6 31.1-79L266.6 364.6C249.9 388.1 240 416.9 240 448zm144-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
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
