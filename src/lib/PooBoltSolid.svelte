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
    d="M268.9-31.8c-5.5-.7-11 1.4-14.5 5.7s-4.6 10.1-2.8 15.3c2.8 8.2 4.3 16.9 4.3 26.1 0 21.7-8.5 37.2-21.9 47.6-13.9 10.8-34.1 17-58.1 17l-24 0c-48.6 0-88 39.4-88 88 0 14.8 3.7 28.8 10.2 41.1-42 6.6-74.2 43-74.2 86.9 0 46.6 36.2 84.7 81.9 87.8 3.1-12.4 9.9-23.8 19.6-32.5L242.7 225c12.2-10.9 28-17 44.4-17 44.6 0 76.5 43 63.7 85.7l-12.7 42.4c28.8 1.2 52.7 21.1 59.8 47.9l26.2 0c48.6 0 88-39.4 88-88 0-43.9-32.1-80.3-74.2-86.9 6.5-12.3 10.2-26.2 10.2-41.1 0-48.6-39.4-88-88-88l-9.4 0c.9-5.4 1.4-10.9 1.4-16.6 0-48.7-36.1-88.9-83.1-95.2zM144.6 416l61.8 0-31.2 104.1c-3.6 11.9 5.3 23.9 17.8 23.9 4.6 0 9-1.7 12.4-4.7L346.5 412.9c3.5-3.1 5.5-7.6 5.5-12.4 0-9.2-7.4-16.6-16.6-16.6l-61.8 0 31.2-104.1c3.6-11.9-5.3-23.9-17.8-23.9-4.6 0-9 1.7-12.4 4.7L133.5 387.1c-3.5 3.1-5.5 7.6-5.5 12.4 0 9.2 7.4 16.6 16.6 16.6z"
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
