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
  viewBox="0 0 640 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M554.8 203.4l16.3 2.3C547.7 88.4 444.2 0 320 0S92.3 88.4 68.9 205.7l16.3-2.3c37-5.3 68.6 26.4 63.4 63.4l-6.7 46.7c-4.1 29-21.6 53.2-45.8 66.8 43.7 78.5 127.6 131.7 223.8 131.7s180.1-53.1 223.8-131.7c-24.1-13.5-41.6-37.8-45.8-66.8l-6.7-46.7c-5.3-37 26.4-68.6 63.4-63.4zM470.3 326.9C447.9 388.2 389.1 432 320 432S192.1 388.2 169.7 326.9c-4.3-11.8 7.7-21.8 19.6-18.1 39.2 12.2 83.7 19.1 130.7 19.1s91.5-6.9 130.7-19.1c11.9-3.7 23.9 6.3 19.6 18.1zM212 208l0 8c0 11-9 20-20 20s-20-9-20-20l0-8c0-37.6 30.4-68 68-68s68 30.4 68 68l0 8c0 11-9 20-20 20s-20-9-20-20l0-8c0-15.5-12.5-28-28-28s-28 12.5-28 28zm188-28c-15.5 0-28 12.5-28 28l0 8c0 11-9 20-20 20s-20-9-20-20l0-8c0-37.6 30.4-68 68-68s68 30.4 68 68l0 8c0 11-9 20-20 20s-20-9-20-20l0-8c0-15.5-12.5-28-28-28zM640 300.6c0-25.6-18.8-47.3-44.1-50.9L549.1 243c-10.6-1.5-19.6 7.5-18.1 18.1l6.7 46.7c3.6 25.3 25.3 44.1 50.9 44.1 28.4 0 51.4-23 51.4-51.4zm-640 0C0 329 23 352 51.4 352 77 352 98.7 333.2 102.3 307.9l6.7-46.7c1.5-10.6-7.5-19.6-18.1-18.1l-46.7 6.7C18.8 253.3 0 275 0 300.6z"
  />
</svg>
