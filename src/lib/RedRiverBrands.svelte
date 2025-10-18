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
    d="M353.2 32L94.8 32C42.4 32 0 74.4 0 126.8L0 385.2C0 437.6 42.4 480 94.8 480l258.4 0c52.4 0 94.8-42.4 94.8-94.8l0-258.4C448 74.4 405.6 32 353.2 32zM144.9 200.9l0 56.3c0 27-21.9 48.9-48.9 48.9l0-154.2c0-13.2 10.7-23.9 23.9-23.9l154.2 0c0 27-21.9 48.9-48.9 48.9l-56.3 0c-12.3-.6-24.6 11.6-24 24zm176.3 72l-56.3 0c-12.3-.6-24.6 11.6-24 24l0 56.3c0 27-21.9 48.9-48.9 48.9l0-154.2c0-13.2 10.7-23.9 23.9-23.9l154.2 0c0 27-21.9 48.9-48.9 48.9z"
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
