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
  viewBox="0 0 640 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M256.1 8a120 120 0 1 1 0 240 120 120 0 1 1 0-240zM226.4 304l59.4 0c6.7 0 13.2 .4 19.7 1.1-.9 4.9-1.4 9.9-1.4 15l0 92.1c0 25.5 10.1 49.9 28.1 67.9l31.9 31.9-286.3 0c-16.4 0-29.7-13.3-29.7-29.7 0-98.5 79.8-178.3 178.3-178.3zM352.1 412.2l0-92.1c0-17.7 14.3-32 32-32l92.1 0c12.7 0 24.9 5.1 33.9 14.1l96 96c18.7 18.7 18.7 49.1 0 67.9l-76.1 76.1c-18.7 18.7-49.1 18.7-67.9 0l-96-96c-9-9-14.1-21.2-14.1-33.9zm104-44.2a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"
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
