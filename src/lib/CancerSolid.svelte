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
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M408 152c57.4 0 104 46.6 104 104 0 141.4-114.6 256-256 256-54.3 0-104.8-17-146.3-45.9-14.5-10.1-18-30.1-7.9-44.6s30.1-18 44.6-7.9c31.1 21.7 68.9 34.4 109.7 34.4 67.9 0 127.5-35.3 161.7-88.5-3.2 .3-6.4 .5-9.7 .5-57.4 0-104-46.6-104-104s46.6-104 104-104zM256 0c54.3 0 104.8 17 146.3 45.9 14.5 10.1 18 30.1 7.9 44.6s-30.1 18-44.6 7.9c-31.1-21.7-68.9-34.4-109.7-34.4-67.9 0-127.5 35.2-161.7 88.4 3.2-.3 6.4-.4 9.7-.4 57.4 0 104 46.6 104 104S161.4 360 104 360 0 313.4 0 256C0 254.1 0 252.2 .1 250.4 3.1 111.6 116.5 0 256 0zM104 216a40 40 0 1 0 0 80 40 40 0 1 0 0-80zm304 0a40 40 0 1 0 0 80 40 40 0 1 0 0-80z"
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
