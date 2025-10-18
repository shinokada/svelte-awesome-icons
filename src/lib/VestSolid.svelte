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
    d="M200 464l0-170.1c0-3.9-.5-7.8-1.4-11.6L144.4 65.4C162.1 77.2 188.2 88 224 88s61.9-10.8 79.6-22.6L249.4 282.3c-1 3.8-1.4 7.7-1.4 11.6L248 464c0 26.5 21.5 48 48 48l104 0c26.5 0 48-21.5 48-48l0-193.5c0-9.5-2.8-18.7-8.1-26.6l-47.9-71.8c-5.3-7.9-8.1-17.1-8.1-26.6L384 48c0-26.5-21.5-48-48-48l-3.5 0c-.3 0-.6 0-1 0-.6 0-1.2 0-1.8 0-18.8 0-34.1 9.7-44.1 18.8-9.3 8.4-28.5 21.2-61.7 21.2s-52.4-12.8-61.7-21.2c-10-9.1-25.3-18.8-44.1-18.8-.6 0-1.2 0-1.8 0-.3 0-.6 0-1 0L112 0C85.5 0 64 21.5 64 48l0 97.5c0 9.5-2.8 18.7-8.1 26.6L8.1 243.9C2.8 251.8 0 261.1 0 270.5L0 464c0 26.5 21.5 48 48 48l104 0c26.5 0 48-21.5 48-48z"
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
