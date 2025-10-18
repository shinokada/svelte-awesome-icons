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
    d="M158.7 274.9a65.6 65.6 0 1 1 131.2 0 65.6 65.6 0 1 1 -131.2 0zm270.7-5.1l-.1 0c-.7-29.3-7.7-58.2-20.5-84.6s-31.2-49.7-53.8-68.4L309.6 143c22 14.2 40.1 33.8 52.7 56.8s19.1 48.8 19.1 75.1c0 86.6-70.5 157.1-157.1 157.1S67.2 361.5 67.2 274.9c0-81.9 63-149.3 143-156.4l0 39.1 108.8-62.8-108.8-62.8 0 38.3c-106.7 7.2-191 96-191 204.6 0 111.6 89.1 202.3 200.1 205l0 .1 210.2 0 0-210.2z"
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
