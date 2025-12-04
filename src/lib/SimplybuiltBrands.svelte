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
    d="M481.6 64l-106 0C361.1 64 349 75.8 349 90.3l0 39.6-185.3 0 0-39.6c0-14.5-12-26.3-26.6-26.3l-106 0C16.5 64 4.7 75.8 4.7 90.3l0 331.4c0 14.5 11.8 26.3 26.6 26.3l450.4 0c14.8 0 26.6-11.8 26.6-26.3l0-331.4c-.2-14.5-12-26.3-26.7-26.3zM150.5 222.7a66.5 66.5 0 1 1 -.3 133.1 66.5 66.5 0 1 1 .3-133.1zm211.9 .1a66.5 66.5 0 1 1 .3 132.9 66.5 66.5 0 1 1 -.3-132.9z"
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
