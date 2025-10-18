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
    d="M298.9 267c-7.4-4.2-15.8-6.3-24.4-6.2-13.2 0-24.4 4.4-33.4 13.3s-13.6 20-13.6 33.4c0 14.1 4.4 25.6 13.3 34.6s20 13.4 33.4 13.4c13.7 0 25-4.6 34.1-13.8S322 321.1 322 307.5c0-8.2-2.1-16.3-6.1-23.5-4-7.1-9.8-13-17-17zM0 32l0 448 448 0 0-448-448 0zM374.7 405.3l-53.1 0 0-23.9-.7 0c-10.5 17.5-29.1 26.2-55.8 26.2-18.4 0-34.7-4.4-48.9-13.1-14.1-8.6-25.5-21-32.9-35.8-7.7-15.1-11.6-32.1-11.6-50.9 0-18.4 3.9-35.1 11.8-50.2 7.5-14.7 18.9-27.1 32.9-35.8 14.1-8.7 30-13.1 47.7-13.1 10.2-.1 20.2 1.6 29.7 5.2 8.9 3.5 17.2 9.1 25 17l0-77.9 55.8-12.1 0 264.4z"
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
