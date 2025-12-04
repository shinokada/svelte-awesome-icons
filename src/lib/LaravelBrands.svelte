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
    d="M504.6 115.8c-.1-.2-.2-.5-.3-.7-.1-.4-.3-.8-.5-1.2-.2-.2-.3-.5-.5-.7-.2-.3-.5-.6-.7-.9-.2-.2-.5-.4-.8-.6-.3-.2-.6-.5-.9-.7L404.6 55.5c-1.2-.7-2.6-1.1-4-1.1s-2.8 .4-4 1.1L300.3 111c-.3 .2-.6 .4-.9 .7-.3 .2-.5 .4-.8 .6-.3 .3-.5 .6-.7 .9-.2 .2-.4 .4-.5 .7-.2 .4-.4 .8-.5 1.2-.1 .2-.2 .4-.3 .7-.2 .7-.3 1.4-.3 2.1l0 105.2-80.2 46.2 0-205.9c0-.7-.1-1.4-.3-2.1-.1-.2-.2-.4-.3-.7-.1-.4-.3-.8-.5-1.2-.1-.3-.4-.5-.5-.7-.2-.3-.5-.6-.7-.9-.2-.2-.5-.4-.8-.6-.3-.2-.6-.5-.9-.7L115.8 1.1c-1.2-.7-2.6-1.1-4-1.1s-2.8 .4-4 1.1L11.5 56.5c-.3 .2-.6 .4-.9 .7-.3 .2-.5 .4-.8 .6-.3 .3-.5 .6-.7 .9-.2 .3-.4 .5-.6 .7-.2 .4-.4 .8-.5 1.2-.1 .2-.2 .4-.3 .7-.2 .7-.3 1.4-.3 2.1l0 329.7c0 1.4 .4 2.8 1.1 4s1.7 2.2 2.9 2.9L204 510.9c.4 .2 .9 .4 1.3 .5 .2 .1 .4 .2 .6 .3 1.3 .4 2.8 .4 4.1 0 .2-.1 .4-.2 .6-.2 .5-.2 1-.3 1.4-.6L404.6 400.1c1.2-.7 2.2-1.7 2.9-2.9s1.1-2.6 1.1-4l0-105.3 92.2-53.1c1.2-.7 2.2-1.7 2.9-3s1.1-2.6 1.1-4l0-109.8c0-.7-.1-1.4-.2-2.1zM111.8 17.3l80.2 46.1-80.2 46.2-80.2-46.2 80.2-46.2zm88.2 60l0 201.3c-33.2 19.1-59.9 34.5-80.2 46.2l0-201.3C153 104.4 179.7 89 200 77.3zm0 412.8L23.5 388.5 23.5 77.3c20.3 11.7 47.1 27.1 80.2 46.2l0 215.2c0 .3 .1 .6 .1 .9 0 .4 .1 .8 .2 1.2 .1 .3 .2 .6 .4 .9 .1 .3 .3 .7 .4 1 .2 .3 .4 .5 .6 .8 .2 .3 .4 .6 .7 .8 .2 .2 .5 .4 .8 .6 .3 .2 .6 .5 .9 .7l92.2 52.2 .1 92.4zm8-106.2L128 338.6c54.7-31.5 113.5-65.3 176.3-101.5l80.1 46.1C355 300 296.2 333.5 208 383.9zm184.5 4.6l-176.5 101.6 0-92.3C317.4 340 376.2 306.4 392.5 297l0 91.4zm0-119.1c-20.3-11.6-47.1-27-80.2-46.1l0-91.4c20.3 11.7 47.1 27.1 80.2 46.2l0 91.3zm8-105.3l-80.2-46.2 80.2-46.2 80.2 46.1-80.2 46.2zm8 105.3l0-91.3c33.2-19.1 60-34.5 80.3-46.2l0 91.4-80.3 46.2z"
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
