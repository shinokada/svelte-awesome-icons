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
  viewBox="0 0 640 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M297.9 0l.1 0c7.6 .1 14.4 4.7 17.5 11.8l132 308.5 .3-.1 .2 .4-2.8 10-42.9 158c-3.7 16.2-19.7 26.3-35.8 22.6l-68.4-15.6-68.5 15.6c-16.1 3.7-32.1-6.4-35.8-22.6l-42.9-158-2.7-10 .1-.4 132.1-308.4c3-7 9.9-11.6 17.5-11.8zM160.1 322.1l131 39.1 6.9 122.5 7.9-121.5 130.6-39.3 .2-.1-131 25.1-8.6-320.2-5.2 320.2-131.8-25.8zM426 222.6l94.4-41 73.8 0-157 247.6 31.6-109-42.8-97.6zm171.5-41.2l41.4 76.2c4 7.5-3.9 15.9-11.6 12.2l-47.6-22.7 17.8-65.7zM127.3 318.5L158.7 430 1.6 154.5c-5.9-10.4 5.5-22 15.9-16.2l151.8 84.2-42.1 96z"
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
