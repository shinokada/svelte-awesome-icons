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
    d="M238 301.2l58.7 0 22.3-30.2-58.7 0-22.3 30.2zM0 282.9l0 6.4 81.8 0 4.7-6.4-86.5 0zM172.9 271c-8.7 0-6-3.6-4.6-5.5 2.8-3.8 7.6-10.4 10.4-14.1s2.8-5.9-2.8-5.9l-51 0-41.1 55.8 100.1 0c33.1 0 51.5-22.5 57.2-30.3l-68.2 0zm317.5-6.9l39.3-53.4-62.2 0-39.3 53.4 62.2 0zM95.3 271l-95.3 0 0 6.4 90.6 0 4.7-6.4zm111-26.6c-2.8 3.8-7.5 10.4-10.3 14.2-1.4 2-4.1 5.5 4.6 5.5l45.6 0s7.3-10 13.5-18.4c8.4-11.4 .7-35-29.2-35l-117.9 0-20.4 27.8 111.4 0c5.6 0 5.5 2.2 2.7 5.9zM0 301.2l73.1 0 4.7-6.4-77.8 0 0 6.4zm323 0l58.7 0 22.3-30.2-58.7 0c-.1 0-22.3 30.2-22.3 30.2zm222 .1l95 0 0-6.4-90.3 0-4.7 6.4zM567.3 271l-4.7 6.4 77.4 0 0-6.4-72.7 0zm-13.5 18.3l86.2 0 0-6.4-81.5 0-4.7 6.4zM389.6 210.7l-22.5 30.6-26.2 0 22.5-30.6-58.7 0-39.3 53.4 143.6 0 39.3-53.4-58.7 0zM423.1 271s-4.3 5.9-6.4 8.7c-7.4 10-.9 21.6 23.2 21.6l94.3 0 22.3-30.3-133.4 0z"
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
