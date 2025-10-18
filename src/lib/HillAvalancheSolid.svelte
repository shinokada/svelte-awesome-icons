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
  viewBox="0 0 576 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M440.1 401.9c34.2 23.1 81.1 19.5 111.4-10.8 34.4-34.4 34.4-90.1 0-124.5-27.8-27.8-69.5-33.1-102.6-16-11.8 6.1-16.4 20.6-10.3 32.3s20.6 16.4 32.3 10.3c15.1-7.8 34-5.3 46.6 7.3 15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-81.7-81.7c22.3-14.2 37.1-39.1 37.1-67.5 0-33.9-21.1-62.9-50.9-74.5 1.9-6.8 2.9-14 2.9-21.5 0-44.2-35.8-80-80-80-27.3 0-51.5 13.7-65.9 34.6-5.8-20-24.2-34.6-46.1-34.6-26.5 0-48 21.5-48 48 0 4 .5 7.9 1.4 11.6L440.1 401.9zM480.4 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM68.7 87C43.5 61.8 .4 79.7 .4 115.3L.4 432c0 44.2 35.8 80 80 80l316.7 0c35.6 0 53.5-43.1 28.3-68.3L68.7 87z"
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
