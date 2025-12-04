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
    d="M22.2 32c-2.1 0-4.2 .4-6.1 1.1s-3.7 1.9-5.2 3.4-2.7 3.2-3.5 5.1-1.3 4-1.3 6.1c0 .9 .1 1.9 .2 2.8L74.1 462.7c.8 5.1 3.4 9.7 7.3 13s8.8 5.2 14 5.2l325.7 0c3.8 .1 7.5-1.3 10.5-3.7s4.9-5.9 5.5-9.7L505 50.7c.7-4.2-.3-8.4-2.8-11.9s-6.2-5.7-10.4-6.4c-.9-.1-1.9-.2-2.8-.2L22.2 32zM308.1 329.8l-104 0-28.1-147 157.3 0-25.2 147z"
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
