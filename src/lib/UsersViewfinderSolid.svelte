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
  viewBox="0 0 576 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M64 0C28.7 0 0 28.7 0 64l0 72c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72c0-8.8 7.2-16 16-16l72 0c13.3 0 24-10.7 24-24S149.3 0 136 0L64 0zM440 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0c8.8 0 16 7.2 16 16l0 72c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72c0-35.3-28.7-64-64-64L440 0zM48 376c0-13.3-10.7-24-24-24S0 362.7 0 376l0 72c0 35.3 28.7 64 64 64l72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-72 0c-8.8 0-16-7.2-16-16l0-72zm528 0c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72c0 8.8-7.2 16-16 16l-72 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0c35.3 0 64-28.7 64-64l0-72zM288 216a56 56 0 1 0 0-112 56 56 0 1 0 0 112zm0 40c-53 0-96 43-96 96l0 24c0 13.3 10.7 24 24 24l144 0c13.3 0 24-10.7 24-24l0-24c0-53-43-96-96-96zm192-64a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM168 272.3c-49.3 4.1-88 45.3-88 95.7l0 10.7c0 11.8 9.6 21.3 21.3 21.3l46.8 0c-2.7-7.5-4.1-15.6-4.1-24l0-24c0-29.5 8.8-56.9 24-79.7zM427.9 400l46.8 0c11.8 0 21.3-9.6 21.3-21.3l0-10.7c0-50.3-38.7-91.6-88-95.7 15.2 22.8 24 50.2 24 79.7l0 24c0 8.4-1.4 16.5-4.1 24zM192 192a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"
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
