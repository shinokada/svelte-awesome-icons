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
    d="M640 199.9l0 54-320 200-320-199.9 0-54 320 200 320-200.1zm-194.5 72l47.1-29.4c-37.2-55.8-100.7-92.6-172.7-92.6s-135.5 36.7-172.6 92.4l.3 0c2.5-2.3 5.1-4.5 7.7-6.7 89.7-74.4 219.4-58.1 290.2 36.3zM225.4 290.7c16.9-11.9 36.5-18.7 57.4-18.7 34.4 0 65.2 18.4 86.4 47.6l45.4-28.4c-20.9-29.9-55.6-49.5-94.8-49.5-38.9 0-73.4 19.4-94.4 49zM103.6 161.1C235.4 56.8 421.8 84.7 521.1 223.2l.7 1 48.8-30.4c-53.5-81.7-145.8-135.7-250.7-135.7-103.5 0-196.6 53.5-250.5 135.6 9.9-10.5 22.7-23.5 34.2-32.6z"
  />
</svg>
