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
    d="M40 24A56 56 0 1 1 152 24 56 56 0 1 1 40 24zm51.1 88c23.5 0 45.5 11.3 59.1 30.4l48.7 68.2c6 8.4 15.7 13.4 26 13.4l31.1 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-31.1 0c-31 0-60.1-15-78.1-40.2l-2.8-3.9 0 80.1 41.6 31.2C209.8 373.3 224 401.8 224 432l0 80c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-80c0-10.1-4.7-19.6-12.8-25.6L70.4 348.8C46.2 330.7 32 302.2 32 272l0-100.9C32 138.5 58.5 112 91.1 112zM32 512l0-132.7c3.1 2.7 6.3 5.4 9.6 7.9L96 428 96 512c0 17.7-14.3 32-32 32s-32-14.3-32-32zm544-88l0 96c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-72-168 0c-7.1 0-13.8-3.1-18.4-8.6s-6.5-12.6-5.3-19.6l30.7-176.7-63.1-137.6 0 72c-5.2-1-10.5-1.6-16-1.6l-32 0 0-120c0-30.9 25.1-56 56-56L520 0c30.9 0 56 25.1 56 56l0 368zM288 336c5.5 0 10.8-.6 16-1.6L304 520c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-184 32 0z"
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
