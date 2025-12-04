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
    d="M112 32C94.3 32 80 46.3 80 64l0 64-24 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l24 0 0 32-24 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l24 0 0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96 96 0c65.6 0 122-39.5 146.7-96l37.3 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-24.8 0c.5-5.3 .8-10.6 .8-16s-.3-10.7-.8-16l24.8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-37.3 0C362 71.5 305.6 32 240 32L112 32zm199.6 96l-167.6 0 0-32 96 0c28.4 0 54 12.4 71.6 32zM144 176l190.7 0c.9 5.2 1.3 10.5 1.3 16s-.5 10.8-1.3 16l-190.7 0 0-32zm167.6 80c-17.6 19.6-43.1 32-71.6 32l-96 0 0-32 167.6 0z"
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
