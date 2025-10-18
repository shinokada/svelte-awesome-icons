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
    d="M224 32c0-11.5-6.2-22.2-16.2-27.8s-22.3-5.5-32.2 .4l-160 96C5.9 106.3 0 116.8 0 128s5.9 21.7 15.5 27.4l160 96c9.9 5.9 22.2 6.1 32.2 .4S224 235.5 224 224l0-64 256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-256 0 0-64zm96 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-160 0zM0 416l0 64c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32zm224-32c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-256 0z"
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
