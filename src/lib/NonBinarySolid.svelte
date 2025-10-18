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
    d="M192 544c-97.2 0-176-78.8-176-176 0-86.3 62.1-158 144-173l0-47.2-49.7 24.8-3 1.3c-15.2 5.7-32.5-.8-39.9-15.7-7.4-14.8-2.2-32.6 11.5-41.3l2.8-1.6 38.8-19.4-38.8-19.4c-15.8-7.9-22.2-27.1-14.3-42.9 7.4-14.8 24.8-21.4 40-15.6l3 1.3 49.7 24.8 0-44.2c0-17.7 14.3-32 32-32s32 14.3 32 32l0 44.2 49.7-24.8 3-1.3c15.2-5.8 32.5 .8 39.9 15.6s2.2 32.7-11.5 41.3l-2.8 1.6-38.7 19.4 38.7 19.3c15.8 7.9 22.2 27.1 14.3 42.9-7.4 14.8-24.7 21.4-39.9 15.6l-3-1.3-49.7-24.8 0 47.2c81.9 15.1 144 86.8 144 173 0 97.2-78.8 176-176 176zm0-64a112 112 0 1 0 0-224 112 112 0 1 0 0 224z"
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
