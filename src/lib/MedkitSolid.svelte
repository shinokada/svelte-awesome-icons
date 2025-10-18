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
    d="M192 56l0 40 128 0 0-40c0-4.4-3.6-8-8-8L200 48c-4.4 0-8 3.6-8 8zm-48 8l0-8c0-30.9 25.1-56 56-56L312 0c30.9 0 56 25.1 56 56l0 424-224 0 0-416zM96 176l0 304-32 0c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64l32 0 0 80zM416 480l0-384 32 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-32 0zM244 208c-8.8 0-16 7.2-16 16l0 36-36 0c-8.8 0-16 7.2-16 16l0 24c0 8.8 7.2 16 16 16l36 0 0 36c0 8.8 7.2 16 16 16l24 0c8.8 0 16-7.2 16-16l0-36 36 0c8.8 0 16-7.2 16-16l0-24c0-8.8-7.2-16-16-16l-36 0 0-36c0-8.8-7.2-16-16-16l-24 0z"
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
