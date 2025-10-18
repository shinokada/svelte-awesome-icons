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
    d="M266.5 240l-85 0 42.5-106.4 42.5 106.4zm68.9 0L262.9 58.3C256.5 42.4 241.1 32 224 32s-32.5 10.4-38.9 26.3L112.6 240 32 240c-13.3 0-24 10.7-24 24s10.7 24 24 24l61.4 0-19.2 48-42.3 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l23.1 0-20.8 52.1c-6.6 16.4 1.4 35 17.9 41.6s35-1.4 41.6-17.9l30.3-75.9 200 0 30.3 75.9c6.6 16.4 25.2 24.4 41.6 17.9s24.4-25.2 17.9-41.6L392.9 384 416 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-42.3 0-19.2-48 61.4 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80.6 0zm-49.7 48l19.2 48-161.6 0 19.2-48 123.3 0z"
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
