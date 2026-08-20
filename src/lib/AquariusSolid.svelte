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
  viewBox="0 0 576 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M401.7 291.4c9-4.5 19.6-4.5 28.6 0l128 64c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L416 355.8 302.3 412.6c-9 4.5-19.6 4.5-28.6 0L160 355.8 46.3 412.6c-15.8 7.9-35 1.5-42.9-14.3s-1.5-35 14.3-42.9l128-64c9-4.5 19.6-4.5 28.6 0L288 348.2 401.7 291.4zm3.4-193.5c8.2-3 17.3-2.5 25.2 1.5l128 64c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L416 163.8 302.3 220.6c-9 4.5-19.6 4.5-28.6 0L160 163.8 46.3 220.6c-15.8 7.9-35 1.5-42.9-14.3s-1.5-35 14.3-42.9l128-64 3.4-1.5c8.2-3 17.3-2.5 25.2 1.5l113.7 56.8 113.7-56.8 3.4-1.5z"
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
