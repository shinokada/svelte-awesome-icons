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
    d="M130.2 127.5l0 0zm351.4 45.4c-10.6-25.5-32.1-53-48.9-61.7 13.7 26.9 21.7 53.9 24.7 74 0 .1 0 .3 .1 .4-27.6-68.8-74.4-96.5-112.6-156.8-15-23.7-10.9-25.2-13.1-24.7l-.1 .1c-46.7 26-75.3 78.4-82.6 122.7-16.6 .9-32.9 5-47.9 12.1-1.4 .6-2.5 1.7-3.1 3s-.9 2.8-.6 4.3c.2 .8 .6 1.6 1.1 2.3s1.2 1.3 1.9 1.7 1.6 .7 2.4 .8 1.7 0 2.5-.3l.5-.2c15.5-7.3 32.4-11.2 49.5-11.3 62.8-.6 97.2 44 107.6 62.3-13-9.2-36.4-18.2-58.8-14.3 87.7 43.9 64.2 194.5-57.4 189.2-59.5-2.6-97.1-51-100.5-90.8 0 0 11.2-41.9 80.6-41.9 7.5 0 28.9-20.9 29.3-27-.1-2-42.5-18.9-59.1-35.2-8.8-8.7-13.1-12.9-16.8-16.1-2-1.7-4.1-3.3-6.3-4.8-5.6-19.5-5.8-40-.7-59.6-25.1 11.4-44.6 29.4-58.7 45.4l-.1 0c-9.7-12.2-9-52.6-8.4-61.1-.1-.5-7.2 3.7-8.2 4.3-8.6 6.1-16.5 12.9-23.8 20.4-16.3 16.6-44.1 50.2-55.5 101.2-4.5 20.4-6.8 44.4-6.8 52.3 0 134.7 109.2 243.9 243.9 243.9 120.6 0 223-87.2 240.4-202.6 11.6-76.7-14.7-131.1-14.7-132z"
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
