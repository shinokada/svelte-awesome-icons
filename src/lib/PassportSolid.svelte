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
  viewBox="0 0 384 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM96 408c0 13.3 10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0c-13.3 0-24 10.7-24 24zM278.6 208c-4.8 26.4-21.5 48.7-44.2 61.2 6.7-17 11.2-38 12.6-61.2l31.6 0zm-173.1 0l31.6 0c1.4 23.1 6 44.2 12.6 61.2-22.7-12.5-39.4-34.8-44.2-61.2zm76.4 55c-6.2-13.4-11.1-32.5-12.7-55l45.8 0c-1.6 22.5-6.5 41.6-12.7 55-4.5 9.6-8.2 13.8-10.2 15.5-2-1.7-5.7-5.8-10.2-15.5zm0-142c4.5-9.6 8.2-13.8 10.2-15.5 2 1.7 5.7 5.8 10.2 15.5 6.2 13.4 11.1 32.5 12.7 55l-45.8 0c1.6-22.5 6.5-41.6 12.7-55zm96.7 55L247 176c-1.4-23.1-6-44.2-12.6-61.2 22.7 12.5 39.4 34.8 44.2 61.2zM137 176l-31.6 0c4.8-26.4 21.5-48.7 44.2-61.2-6.7 17-11.2 38-12.6 61.2zm183 16a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"
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
