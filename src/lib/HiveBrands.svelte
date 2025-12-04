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
    d="M260.4 254.9L131.5 33.1c-.2-.3-.5-.6-.8-.8s-.7-.3-1.1-.3-.8 .1-1.1 .3-.6 .5-.8 .8L.3 254.9c-.2 .3-.3 .7-.3 1.1s.1 .8 .3 1.1L129.1 478.9c.2 .3 .5 .6 .8 .8s.7 .3 1.1 .3 .8-.1 1.1-.3 .6-.5 .8-.8L260.4 257.1c.2-.3 .3-.7 .3-1.1s-.1-.8-.3-1.1zm39.1-25.7c.2 .3 .5 .6 .8 .8s.7 .3 1.1 .3l66.5 0c.4 0 .8-.1 1.1-.3s.6-.5 .8-.8 .3-.7 .3-1.1-.1-.8-.3-1.1L259.1 33.1c-.2-.3-.5-.6-.8-.8s-.7-.3-1.1-.3l-66.5 0c-.4 0-.8 .1-1.1 .3s-.6 .5-.8 .8-.3 .7-.3 1.1 .1 .8 .3 1.1L299.4 229.2zm212.3 25.7L384.9 33.1c-.2-.3-.5-.6-.8-.8s-.7-.3-1.1-.3l-66.6 0c-.4 0-.8 .1-1.1 .3s-.6 .5-.8 .8-.3 .7-.3 1.1 .1 .8 .3 1.1L440.7 256 314.5 476.7c-.2 .3-.3 .7-.3 1.1s.1 .8 .3 1.1 .5 .6 .8 .8 .7 .3 1.1 .3l66.6 0c.4 0 .8-.1 1.1-.3s.6-.5 .8-.8L511.7 257.1c.2-.3 .3-.7 .3-1.1s-.1-.8-.3-1.1zM366 284.9l-66.5 0c-.4 0-.8 .1-1.1 .3s-.6 .5-.8 .8L188.8 476.7c-.2 .3-.3 .7-.3 1.1s.1 .8 .3 1.1 .5 .6 .8 .8 .7 .3 1.1 .3l66.5 0c.4 0 .8-.1 1.1-.3s.6-.5 .8-.8L367.9 288.3c.2-.3 .3-.7 .3-1.1s-.1-.8-.3-1.1-.5-.6-.8-.8-.7-.3-1.1-.3z"
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
