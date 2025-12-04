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
    d="M448 64L64.2 64c-23.6 0-42.7 19.1-42.7 42.7l0 63.9 42.7 0 0-63.9 383.8 0 0 298.6-149.2 0 0 42.7 149.4 0c23.6 0 42.7-19.1 42.7-42.7l0-298.6C490.9 83.1 471.6 64 448 64zM21.5 383.6l0 63.9 63.9 0c0-35.3-28.6-63.9-63.9-63.9zm0-85l0 42.4c58.9 0 106.6 48.1 106.6 107l42.7 0c.1-82.4-66.9-149.3-149.3-149.4zM213.6 448l42.7 0C255.8 318.5 151 213.7 21.5 213.4l0 42.4c106-.2 192 86.2 192.1 192.2z"
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
