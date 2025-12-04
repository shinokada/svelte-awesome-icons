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
    d="M489.5 287.9l-27.4 0c-2.6 0-4.6 2-4.6 4.6l0 32-36.6 0 0-178.3c0-2.6-2-4.6-4.6-4.6l-27.4 0c-2.6 0-4.6 2-4.6 4.6l0 32-36.6 0 0-32c0-2.6-2-4.6-4.6-4.6l-27.4 0c-2.6 0-4.6 2-4.6 4.6l0 32-36.6 0 0-32c0-6-8-4.6-11.7-4.6l0-38c8.3-2 17.1-3.4 25.7-3.4 10.9 0 20.9 4.3 31.4 4.3 4.6 0 27.7-1.1 27.7-8l0-60c0-2.6-2-4.6-4.6-4.6-5.1 0-15.1 4.3-24 4.3-9.7 0-20.9-4.3-32.6-4.3-8 0-16 1.1-23.7 2.9l0-4.9c5.4-2.6 9.1-8.3 9.1-14.3 0-20.7-31.4-20.8-31.4 0 0 6 3.7 11.7 9.1 14.3l0 111.7c-3.7 0-11.7-1.4-11.7 4.6l0 32-36.6 0 0-32c0-2.6-2-4.6-4.6-4.6l-27.4 0c-2.6 0-4.6 2-4.6 4.6l0 32-36.3 0 0-32c0-2.6-2-4.6-4.6-4.6l-27.4 0c-2.6 0-4.6 2-4.6 4.6l0 178.3-36.6 0 0-32c0-2.6-2-4.6-4.6-4.6l-27.4 0c-2.6 0-4.6 2-4.6 4.6l0 219.5 182.9 0 0-96c0-72.6 109.7-72.6 109.7 0l0 96 182.9 0 0-219.5c.1-2.6-1.9-4.6-4.5-4.6zm-288.1-4.5c0 2.6-2 4.6-4.6 4.6l-27.4 0c-2.6 0-4.6-2-4.6-4.6l0-64c0-2.6 2-4.6 4.6-4.6l27.4 0c2.6 0 4.6 2 4.6 4.6l0 64zm146.4 0c0 2.6-2 4.6-4.6 4.6l-27.4 0c-2.6 0-4.6-2-4.6-4.6l0-64c0-2.6 2-4.6 4.6-4.6l27.4 0c2.6 0 4.6 2 4.6 4.6l0 64z"
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
