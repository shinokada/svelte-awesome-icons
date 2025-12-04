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
    d="M64 64C28.7 64 0 92.7 0 128L0 336c0 35.3 28.7 64 64 64l.4 0c4 44.9 41.7 80 87.6 80s83.6-35.1 87.6-80l104.7 0c4 44.9 41.7 80 87.6 80 46.1 0 83.9-35.4 87.7-80.5 31.7-3.8 56.3-30.8 56.3-63.5l0-101.3c0-13.8-4.5-27.3-12.8-38.4l-80-106.7C471.1 73.5 452.1 64 432 64L64 64zM504 224l-120 0 0-96 48 0 72 96zM64 224l0-96 96 0 0 96-96 0zm160 0l0-96 96 0 0 96-96 0zM392 392a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM152 352a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"
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
