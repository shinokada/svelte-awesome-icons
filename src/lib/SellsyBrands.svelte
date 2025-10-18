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
  viewBox="0 0 640 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M540 237.3c3.1-12.3 4.3-24.8 4.3-37.4 0-92.5-75.4-167.9-167.9-167.9-77.2 0-144.6 53-163 127.8-15.3-13.2-34.9-20.5-55.2-20.5-46.3 0-84 37.7-84 84 0 7.4 .9 15 3.1 22.4-42.9 20.2-70.8 63.7-70.8 111.2 0 68 55.5 123.2 123.2 123.2l381.2 0c67.7 0 123.2-55.2 123.2-123.2 0-56.4-38.9-106-94.1-119.5zM200.2 401.6c0 8.3-7 15.3-15.3 15.3l-30.9 0c-8.3 0-15.3-7-15.3-15.3l0-110.9c0-8.3 7-15.3 15.3-15.3l30.9 0c8.3 0 15.3 7 15.3 15.3l0 110.9zm89.5 0c0 8.3-7 15.3-15.3 15.3l-30.9 0c-8.3 0-15.3-7-15.3-15.3l0-131.5c0-8.3 7-15.3 15.3-15.3l30.9 0c8.3 0 15.3 7 15.3 15.3l0 131.5zm89.5 0c0 8.3-7 15.3-15.3 15.3l-31 0c-8.3 0-15.3-7-15.3-15.3l0-162.7c0-8.3 7-15.3 15.3-15.3l31 0c8.3 0 15.3 7 15.3 15.3l0 162.7zm87 0c0 8.3-7 15.3-15.3 15.3l-28.5 0c-8.3 0-15.3-7-15.3-15.3l0-224.6c0-8.6 7-15.6 15.3-15.6l28.5 0c8.3 0 15.3 7 15.3 15.6l0 224.6z"
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
