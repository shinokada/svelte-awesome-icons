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
    d="M27.8 162.2l-18.5 24.9 90.5 0 6.9-130.7-78.9 105.8zM396.6 45.7L268 32 403.7 179.2 396.6 45.7zM112.5 218.3l-11.2-22-91.1 0 224.9 261.7-122.6-239.7zm2-31.2l284 0C340.6 124.3 293.3 72.9 256.6 33L114.5 187.1zm297.3 9.1l-133.9 261.8 224.8-261.7-90.9 0 0-.1zM415.7 69l-9.4-12.6 .9 17.3 6.1 113.4 90.3 0-87.9-118.1zM113.8 93.5L109.2 179.1 245 32 116.4 45.7 113.8 93.5zM401.5 196.2l-290 0c18.2 35.6 66.6 130.2 145.1 283.8L401.5 196.2z"
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
