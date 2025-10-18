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
  viewBox="0 0 384 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M84.9 256l-28.4 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l11.6 0C53.2 124.7 116.8 42 207.6 42l8.2 0c33.6 0 66.2 11.3 92.5 32.2l16.1 12.7c13.9 11 16.2 31.1 5.2 45s-31.1 16.2-45 5.2l-16.1-12.7c-15-11.9-33.6-18.4-52.8-18.4l-8.2 0c-53.8 0-90.1 52.9-73.5 102l162.4 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-145.1 0c2.3 10.6 3.6 21.3 3.9 32l141.2 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L150 336c-4.8 18.6-12.6 36.5-23.6 52.9l-18.1 27.1 212.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-272 0c-11.8 0-22.6-6.5-28.2-16.9s-5-23 1.6-32.9l51.2-76.8c3.7-5.6 6.9-11.4 9.4-17.4l-26 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l34.8 0c-.5-10.8-2.6-21.6-6.4-32z"
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
