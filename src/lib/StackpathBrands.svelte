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
    d="M244.6 232.4c0 8.5-4.3 20.5-21.3 20.5l-19.6 0 0-41.5 19.6 0c17.1 0 21.3 12.4 21.3 21zM448 32l0 448-448 0 0-448 448 0zM151.3 287.8c0-21.2-12.1-34.5-46.7-44.8-20.6-7.4-26-10.9-26-18.6s7-14.6 20.4-14.6c14.1 0 20.8 8.4 20.8 18.4l30.7 0 .2-.6c.5-19.6-15.1-41.6-51.1-41.6-23.4 0-52.6 10.8-52.6 38.3 0 19.4 9.2 31.3 50.7 44.4 17.3 6.2 21.9 10.4 21.9 19.5 0 15.2-19.1 14.2-19.5 14.2-20.4 0-25.7-9.1-25.7-21.9l-30.8 0-.2 .6c-.7 31.3 28.4 45.2 56.6 45.2 30 0 51.1-13.6 51.1-38.3zm125.4-55.6c0-25.3-18.4-45.5-53.4-45.5l-51.8 0 0 138.2 32.2 0 0-47.4 19.6 0c30.3 0 53.4-16 53.4-45.4zM297.9 325l49.1-138.2-31.1 0-47.9 138.2 29.9 0zM404.5 186.8l-31.1 0-47.9 138.2 29.9 0 49.1-138.2z"
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
