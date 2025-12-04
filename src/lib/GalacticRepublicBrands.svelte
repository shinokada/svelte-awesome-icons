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
    d="M256 8a248 248 0 1 1 0 496 248 248 0 1 1 0-496zm0 16.5a231.5 231.5 0 1 0 0 462.9 231.5 231.5 0 1 0 0-462.9zm27.6 21.8l0 24.6c30.3 4.5 59 16.3 83.6 34.5l17.4-17.4c-28.7-22.1-63.3-36.9-101-41.8zm-55.4 .1c-37.6 4.9-72.2 19.8-100.9 41.9l17.3 17.4 .1 0c24.1-17.8 52.6-30.1 83.5-34.7l0-24.5zm12.2 50.2l0 82.9c-10 2-19.4 5.9-27.7 11.4l-58.6-58.6-21.9 21.9 58.7 58.7c-5.5 8.2-9.4 17.6-11.5 27.6l-82.9 0 0 31 82.9 0c2 10 6 19.3 11.5 27.5l-58.7 58.7 21.9 21.9 58.6-58.6c8.4 5.6 17.8 9.5 27.7 11.5l0 82.9 31 0 0-82.9c10-2 19.4-6.1 27.6-11.5l58.7 58.7 21.9-21.9-58.7-58.7c5.5-8.2 9.5-17.5 11.5-27.5l82.9 0 0-31-82.9 0c-2-10-6-19.4-11.5-27.6l58.7-58.7-21.9-21.9-58.7 58.7c-8.2-5.5-17.6-9.5-27.6-11.5l0-82.9-31 0zm183.2 30.7l-17.4 17.4c18.3 24.6 30.2 53.4 34.7 83.7l24.6 0c-5-37.7-19.8-72.3-41.9-101zm-335.6 .1c-22.1 28.7-36.9 63.3-41.8 100.9l24.6 0c4.6-31 16.8-59.4 34.6-83.5L88.2 127.4zM46.3 283.7c4.9 37.6 19.7 72.2 41.8 100.9l17.4-17.4C87.7 343.1 75.6 314.6 71 283.7l-24.6 0 0 0zm394.7 0c-4.6 31-16.8 59.5-34.7 83.6l17.4 17.4c22.1-28.7 37-63.3 41.9-101l-24.6 0zM144.7 406.4l-17.4 17.4c28.7 22.1 63.3 37 101 41.9l0-24.6c-31-4.6-59.5-16.8-83.6-34.6zm222.5 0c-24.1 17.8-52.6 30.1-83.6 34.7l0 24.6c37.7-4.9 72.2-19.8 101-41.8l-17.3-17.4-.1 0z"
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
