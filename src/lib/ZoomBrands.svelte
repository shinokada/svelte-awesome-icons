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

  const ariaDescribedby = $derived(desc?.id && desc.desc ? desc.id : undefined);
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
  aria-describedby={ariaDescribedby}
  viewBox="0 0 640 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M134.2 326.6l-114.4 0c-8 0-15.2-4.8-18.3-12.2S.1 298.6 5.8 292.9l79.3-79.3-56.8 0C12.7 213.6 0 201 0 185.4l105.5 0c8 0 15.2 4.8 18.3 12.2s1.4 15.9-4.3 21.6l-79.3 79.3 65.7 0c15.6 0 28.3 12.6 28.3 28.3zM640 238.3c0-30.4-24.7-55.1-55.1-55.1-16.2 0-30.9 7.1-41 18.3-10.1-11.2-24.7-18.3-41-18.3-30.4 0-55.1 24.7-55.1 55.1l0 88.3c15.6 0 28.3-12.7 28.3-28.3l0-60c0-14.8 12-26.8 26.8-26.8s26.8 12 26.8 26.8l0 60c0 15.6 12.6 28.3 28.3 28.3l0-88.3c0-14.8 12-26.8 26.8-26.8s26.8 12 26.8 26.8l0 60c0 15.6 12.6 28.3 28.3 28.3l0-88.3zM288.2 256a72.8 72.8 0 1 1 145.5 0 72.8 72.8 0 1 1 -145.5 0zm117.3 0a44.5 44.5 0 1 0 -89 0 44.5 44.5 0 1 0 89 0zm-274.1 0a72.8 72.8 0 1 1 145.5 0 72.8 72.8 0 1 1 -145.5 0zm117.3 0a44.5 44.5 0 1 0 -89 0 44.5 44.5 0 1 0 89 0z"
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
