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
    d="M222.5 209.6l0 66.2 33.5 33.5 33.3-33.3 0-66.4-33.4-33.4-33.4 33.4zM256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM401.1 422.4l-26.1 19.2-26-19.2 0-65.5-33.4-33.4-33.4 33.4 0 65.5-26.2 19.2-26.1-19.2 0-65.5-33.4-33.4-33.5 33.4 0 65.5-26.1 19.2-26.1-19.2 0-87 59.5-59.5 0-87.9 59.5-59.5 0-75.6 26.1-19.2 26.1 19.2 0 75.6 59.5 59.5 0 87.6 59.7 59.7 0 87.1-.1 0z"
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
