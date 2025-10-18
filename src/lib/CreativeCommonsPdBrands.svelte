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
    d="M256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zm0 449.5c-139.2 0-235.8-138-190.2-267.9l78.8 35.1c-2.1 10.5-3.3 21.5-3.3 32.9 0 99 73.9 126.9 120.4 126.9 22.9 0 53.5-6.7 79.4-29.5L305 311.1c-5.5 6.3-17.6 16.7-36.3 16.7-37.8 0-53.7-39.9-53.9-71.9 230.4 102.6 216.5 96.5 217.9 96.8-34.3 62.4-100.6 104.8-176.7 104.8zm194.2-150l-224-100c18.8-34 54.9-30.7 74.7-11l40.4-41.6c-27.1-23.3-58-27.5-78.1-27.5-47.4 0-80.9 20.5-100.7 51.6L87.6 145.6c36.1-54.9 98.1-91.2 168.5-91.2 111.1 0 201.5 90.4 201.5 201.5 0 18-2.4 35.4-6.8 52-.3-.1-.4-.2-.6-.4z"
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
