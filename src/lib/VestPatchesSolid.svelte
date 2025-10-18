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
    d="M200 293.9L200 464c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 270.5c0-9.5 2.8-18.7 8.1-26.6l47.9-71.8c5.3-7.9 8.1-17.1 8.1-26.6L64 48C64 21.5 85.5 0 112 0l3.5 0c.3 0 .6 0 1 0 .6 0 1.2 0 1.8 0 18.8 0 34.1 9.7 44.1 18.8 9.3 8.4 28.5 21.2 61.7 21.2s52.4-12.8 61.7-21.2c10-9.1 25.3-18.8 44.1-18.8 .6 0 1.2 0 1.8 0 .3 0 .6 0 1 0L336 0c26.5 0 48 21.5 48 48l0 97.5c0 9.5 2.8 18.7 8.1 26.6l47.9 71.8c5.3 7.9 8.1 17.1 8.1 26.6L448 464c0 26.5-21.5 48-48 48l-104 0c-26.5 0-48-21.5-48-48l0-170.1c0-3.9 .5-7.8 1.4-11.6L303.6 65.4C285.9 77.2 259.8 88 224 88s-61.9-10.8-79.6-22.6l54.2 216.8c1 3.8 1.4 7.7 1.4 11.6zM96 456a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM63.5 255.5c-4.7 4.7-4.7 12.3 0 17L79 288 63.5 303.5c-4.7 4.7-4.7 12.3 0 17s12.3 4.7 17 0L96 305 111.5 320.5c4.7 4.7 12.3 4.7 17 0s4.7-12.3 0-17L113 288 128.5 272.5c4.7-4.7 4.7-12.3 0-17s-12.3-4.7-17 0L96 271 80.5 255.5c-4.7-4.7-12.3-4.7-17 0zM304 280l0 40c0 8.8 7.2 16 16 16l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-8c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
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
