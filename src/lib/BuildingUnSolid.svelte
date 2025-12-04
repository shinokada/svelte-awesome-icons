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
    d="M32 64C32 28.7 60.7 0 96 0L352 0c35.3 0 64 28.7 64 64l0 272-112 0c-20.9 0-39.5 10.1-51.2 25.6-8-6-18-9.6-28.8-9.6-26.5 0-48 21.5-48 48l0 64 64 0 0 48-144 0c-35.3 0-64-28.7-64-64L32 64zM144 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM144 224c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM427.4 380.5c9-2.1 18.3 2.2 22.5 10.5l26.1 52.2 0-43.3c0-11 9-20 20-20s20 9 20 20l0 128c0 9.3-6.4 17.3-15.4 19.5s-18.3-2.2-22.5-10.5L452 484.7 452 528c0 11-9 20-20 20s-20-9-20-20l0-128c0-9.3 6.4-17.3 15.4-19.5zM324 400l0 96c0 6.6 5.4 12 12 12s12-5.4 12-12l0-96c0-11 9-20 20-20s20 9 20 20l0 96c0 28.7-23.3 52-52 52s-52-23.3-52-52l0-96c0-11 9-20 20-20s20 9 20 20z"
  />
</svg>
