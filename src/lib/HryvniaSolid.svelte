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
    d="M336 149.4C336 77 268.5 23.5 198 40.1L93.2 64.9C76 68.9 65.4 86.2 69.4 103.4s21.3 27.9 38.5 23.8l104.8-24.7c30.3-7.1 59.3 15.8 59.3 46.9 0 17.6-9.6 33.8-25 42.3l-.7 .4-222.3 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l336 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32.4 0c5.5-13.3 8.4-27.8 8.4-42.6zM360 272L24 272c-13.3 0-24 10.7-24 24s10.7 24 24 24l33.3 0c-6.1 13.4-9.3 28.1-9.3 43.3 0 64.1 56.9 113.4 120.4 104.2l137.9-19.9c17.5-2.5 29.6-18.7 27.1-36.2s-18.8-29.6-36.2-27.1L159.2 404.2c-24.9 3.6-47.2-15.7-47.2-40.9 0-15.1 8.2-28.9 21.4-36.2l13-7.1 213.6 0c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
