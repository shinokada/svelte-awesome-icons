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
    d="M224 128a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM176 336c0-61.9 50.1-112 112-112s112 50.1 112 112l0 8c0 13.3-10.7 24-24 24l-176 0c-13.3 0-24-10.7-24-24l0-8zM392 144a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm27.2 100.4c9.1-2.9 18.8-4.4 28.8-4.4 53 0 96 43 96 96l0 10.7c0 11.8-9.6 21.3-21.3 21.3l-78.8 0c2.7-7.5 4.1-15.6 4.1-24l0-8c0-34.1-10.6-65.7-28.8-91.6zm-262.4 0c-18.2 26-28.8 57.5-28.8 91.6l0 8c0 8.4 1.4 16.5 4.1 24l-78.8 0C41.6 368 32 358.4 32 346.7L32 336c0-53 43-96 96-96 10 0 19.7 1.5 28.8 4.4zM72 144a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zM0 440c0-13.3 10.7-24 24-24l528 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 464c-13.3 0-24-10.7-24-24z"
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
