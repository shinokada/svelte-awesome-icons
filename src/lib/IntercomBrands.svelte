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
  viewBox="0 0 448 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M392 32L56 32C25.1 32 0 57.1 0 88L0 424c0 30.9 25.1 56 56 56l336 0c30.9 0 56-25.1 56-56l0-336c0-30.9-25.1-56-56-56zM283.7 114.1c0-19.8 29.9-19.8 29.9 0l0 199.5c0 19.8-29.9 19.8-29.9 0l0-199.5zm-74.6-7.5c0-19.8 29.9-19.8 29.9 0l0 216.5c0 19.8-29.9 19.8-29.9 0l0-216.5zm-74.7 7.5c0-19.8 29.9-19.8 29.9 0l0 199.5c0 19.8-29.9 19.8-29.9 0l0-199.5zM59.7 144c0-19.8 29.9-19.8 29.9 0l0 134.3c0 19.8-29.9 19.8-29.9 0l0-134.3zM383.1 371.8c-72.8 63-241.7 65.4-318.1 0-15-12.8 4.4-35.5 19.4-22.7 65.9 55.3 216.1 53.9 279.3 0 14.9-12.9 34.3 9.8 19.4 22.7zm5.2-93.5c0 19.8-29.9 19.8-29.9 0l0-134.3c0-19.8 29.9-19.8 29.9 0l0 134.3z"
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
