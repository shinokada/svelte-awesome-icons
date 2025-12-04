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
  viewBox="0 0 576 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M239.7 79.9a175.8 175.8 0 1 0 0 351.6 175.8 175.8 0 1 0 0-351.6zM199.8 359.5c-41.7-15.9-71.4-56.4-71.4-103.8s29.7-87.9 71.4-104.1l0 207.9zm79.8 .3l0-208.2c41.7 16.2 71.4 56.7 71.4 104.1s-29.7 87.9-71.4 104.1zM528 32L48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l480 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48zM329.7 448l-90.3 0C133.2 448 45.6 362.5 45.6 257.8 45.6 143.2 133.2 64 239.4 64l90.3 0c105 0 200.7 79.2 200.7 193.8 0 104.7-95.7 190.2-200.7 190.2z"
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
