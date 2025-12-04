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
    d="M112 0C85.5 0 64 21.5 64 48l0 160 80 0 0-32c0-53 43-96 96-96l208 0 0-32c0-26.5-21.5-48-48-48L112 0zM240 128c-26.5 0-48 21.5-48 48l0 32 80 0c53 0 96 43 96 96l0 112 160 0c26.5 0 48-21.5 48-48l0-192c0-26.5-21.5-48-48-48l-288 0zm200 64l48 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-48c0-13.3 10.7-24 24-24zM48 256c-26.5 0-48 21.5-48 48l0 10.4 156.6 86.2c1.1 .6 2.2 .9 3.4 .9s2.4-.3 3.4-.9L320 314.4 320 304c0-26.5-21.5-48-48-48L48 256zM320 369.2L186.6 442.6c-8.1 4.5-17.3 6.8-26.6 6.8s-18.4-2.4-26.6-6.8L0 369.2 0 464c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-94.8z"
  />
</svg>
