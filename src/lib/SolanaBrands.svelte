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
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M510.5 385.2l-84.9 88.7c-1.8 1.9-4.1 3.5-6.6 4.5s-5.2 1.6-7.9 1.6L8.9 480c-1.9 0-3.8-.5-5.4-1.6s-2.9-2.5-3.6-4.2-1-3.6-.7-5.5 1.2-3.6 2.5-4.9l84.9-88.7c1.8-1.9 4.1-3.5 6.5-4.5s5.1-1.6 7.8-1.6l402.4 0c1.9 0 3.8 .5 5.4 1.6s2.9 2.5 3.6 4.2 1 3.6 .7 5.5-1.2 3.6-2.5 4.9zM425.7 206.6c-1.8-1.9-4.1-3.5-6.6-4.5s-5.2-1.6-7.9-1.6l-402.4 0c-1.9 0-3.8 .5-5.4 1.6s-2.9 2.5-3.6 4.2-1 3.6-.7 5.5 1.2 3.6 2.5 4.9l84.9 88.7c1.8 1.9 4.1 3.5 6.5 4.5s5.1 1.6 7.8 1.6l402.4 0c1.9 0 3.8-.5 5.4-1.6s2.9-2.5 3.6-4.2 1-3.6 .7-5.5-1.2-3.6-2.5-4.9l-84.9-88.7zM8.9 142.9l402.4 0c2.7 0 5.4-.5 7.9-1.6s4.7-2.6 6.6-4.5l84.9-88.7c1.3-1.4 2.2-3.1 2.5-4.9s.1-3.7-.7-5.5-2-3.2-3.6-4.2-3.5-1.6-5.4-1.6L101 32c-2.7 0-5.4 .5-7.8 1.6s-4.7 2.6-6.5 4.5L1.7 126.8c-1.3 1.4-2.2 3.1-2.5 4.9s-.1 3.7 .7 5.5 2 3.2 3.6 4.2 3.5 1.6 5.4 1.6z"
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
