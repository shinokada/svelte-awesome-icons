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
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M463.2 322.4c56.2 64.3 4.2 157.6-91.9 157.6-39.6 0-78.8-17.7-100.1-50-6.9 .4-22.7 .4-29.6 0-21.4 32.4-60.6 50-100.1 50-95.5 0-148.3-93-91.9-157.6-79.1-131.9 31.3-290.4 206.8-290.4 175.6 0 285.9 158.6 206.8 290.4zm-339.6-83l41.5 0 0-58.1-41.5 0 0 58.1zm217.2 86.1l0-23.8c-60.5 20.9-132.4 9.2-187.6-34l.2 24.9c51.1 46.4 131.7 57.9 187.3 32.9zM190 239.4l166.1 0 0-58.1-166.1 0 0 58.1z"
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
