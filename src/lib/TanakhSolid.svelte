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
  viewBox="0 0 448 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M352 512L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-66.7C13.4 374.7 0 356.9 0 336L0 48C0 21.5 21.5 0 48 0L352 0c53 0 96 43 96 96l0 320c0 53-43 96-96 96zm32-96c0-17.7-14.3-32-32-32l-256 0 0 64 256 0c17.7 0 32-14.3 32-32zM113.9 229c-1.2 2-1.9 4.2-1.9 6.6 0 6.9 5.6 12.5 12.5 12.5l56.9 0 30.5 49.2c2.6 4.2 7.2 6.8 12.2 6.8s9.6-2.6 12.2-6.8l30.5-49.2 56.9 0c6.9 0 12.5-5.6 12.5-12.5 0-2.3-.6-4.6-1.9-6.6l-27.8-45 27.8-45c1.2-2 1.9-4.2 1.9-6.6 0-6.9-5.6-12.5-12.5-12.5l-56.9 0-30.5-49.2C233.6 66.6 229 64 224 64s-9.6 2.6-12.2 6.8l-30.5 49.2-56.9 0c-6.9 0-12.5 5.6-12.5 12.5 0 2.3 .6 4.6 1.9 6.6l27.8 45-27.8 45z"
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
