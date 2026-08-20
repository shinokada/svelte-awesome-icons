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

  const ariaDescribedby = $derived(desc?.id && desc.desc ? desc.id : undefined);
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
  aria-describedby={ariaDescribedby}
  viewBox="0 0 448 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M224 0c114.9 0 208 93.1 208 208 0 94.2-73.4 195.3-154.4 228.6l24.1 54.3c1.5 3.4 2.3 7 2.3 10.7 0 14.6-11.8 26.4-26.4 26.4l-107.2 0c-14.6 0-26.4-11.8-26.4-26.4 0-3.7 .8-7.3 2.3-10.7l24.1-54.3C89.4 403.3 16 302.2 16 208 16 93.1 109.1 0 224 0zm-.6 85.6c-2.7-13-15.3-21.4-28.3-18.8-62.6 12.8-110.5 66.2-114.8 131.5-.9 13.2 9.2 24.7 22.4 25.5 13.2 .9 24.6-9.2 25.5-22.4 2.9-43.5 34.8-79.1 76.5-87.6 13-2.6 21.4-15.3 18.7-28.3z"
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
