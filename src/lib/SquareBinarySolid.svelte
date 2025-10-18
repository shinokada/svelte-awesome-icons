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
  viewBox="0 0 448 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm144 4c-24.3 0-44 19.7-44 44l0 48c0 24.3 19.7 44 44 44l32 0c24.3 0 44-19.7 44-44l0-48c0-24.3-19.7-44-44-44l-32 0zm-4 44c0-2.2 1.8-4 4-4l32 0c2.2 0 4 1.8 4 4l0 48c0 2.2-1.8 4-4 4l-32 0c-2.2 0-4-1.8-4-4l0-48zm140-44c-11 0-20 9-20 20 0 9.7 6.9 17.7 16 19.6l0 76.4c0 11 9 20 20 20s20-9 20-20l0-96c0-11-9-20-20-20l-16 0zM132 296c0 9.7 6.9 17.7 16 19.6l0 76.4c0 11 9 20 20 20s20-9 20-20l0-96c0-11-9-20-20-20l-16 0c-11 0-20 9-20 20zm96 24l0 48c0 24.3 19.7 44 44 44l32 0c24.3 0 44-19.7 44-44l0-48c0-24.3-19.7-44-44-44l-32 0c-24.3 0-44 19.7-44 44zm44-4l32 0c2.2 0 4 1.8 4 4l0 48c0 2.2-1.8 4-4 4l-32 0c-2.2 0-4-1.8-4-4l0-48c0-2.2 1.8-4 4-4z"
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
