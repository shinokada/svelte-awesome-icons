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
    d="M136 40a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zM117.9 197.6l12.6 63c-38.6 12.4-66.5 48.7-66.5 91.4 0 53 43 96 96 96 35.6 0 66.7-19.4 83.3-48.2 2.3 .1 4.6 .2 7 .2l4.1 0c1 0 2.1 0 3.1 0l55.2 0c-20.4 64.9-81 112-152.7 112-88.4 0-160-71.6-160-160 0-73.8 50-135.9 117.9-154.4zm148.6-28.1l23.7 118.5 60.5 0c33.3 0 63.2 20.7 74.9 51.9l25.5 68 18.7-6.2c16.8-5.6 34.9 3.5 40.5 20.2s-3.5 34.9-20.2 40.5l-48 16c-16.3 5.4-34-3-40.1-19.1l-36.3-96.9c-2.3-6.2-8.3-10.4-15-10.4l-86.1 0c-.4 0-.8 0-1.3 0l-13.1 0c-30.5 0-56.8-21.5-62.8-51.4L165.3 189.7c-6.4-31.9 18-61.7 50.6-61.7 24.6 0 45.8 17.4 50.6 41.5z"
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
