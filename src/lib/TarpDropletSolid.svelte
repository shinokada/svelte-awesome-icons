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
    d="M256 160c35.3 0 64-26.9 64-60 0-24-33.7-70.1-52.2-93.5-6.1-7.7-17.5-7.7-23.6 0-18.5 23.4-52.2 69.5-52.2 93.5 0 33.1 28.7 60 64 60zM368 96c0 61.9-50.1 112-112 112S144 157.9 144 96c0-11.1 1.6-21.9 4.6-32L64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l277.5 0c17 0 33.3-6.7 45.3-18.7L493.3 322.7c12-12 18.7-28.3 18.7-45.3L512 128c0-35.3-28.7-64-64-64l-84.6 0c3 10.1 4.6 20.9 4.6 32zm85.5 176L336 389.5 336 296c0-13.3 10.7-24 24-24l93.5 0zM96 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
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
