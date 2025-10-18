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
  viewBox="0 0 256 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M0 16C0-10.5 21.5-32 48-32l160 0c26.5 0 48 21.5 48 48l0 24-104 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l104 0 0 48-72 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 0 48-104 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l104 0 0 48-72 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 0 48-104 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l104 0 0 24c0 26.5-21.5 48-48 48L48 544c-26.5 0-48-21.5-48-48L0 16z"
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
