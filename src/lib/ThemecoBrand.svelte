<script lang="ts">
  interface CtxType {
    size?: string;
    role?: string;
    color?: string;
    class?: string;
    withEvents?: boolean;
  }

  type TitleType = {
    id?: string;
    title?: string;
  };

  type DescType = {
    id?: string;
    desc?: string;
  };

  import { getContext } from 'svelte';
  const ctx: CtxType = getContext('iconCtx') ?? {};

  let className = ctx.class || '';
  export { className as class };
  export let size: string = ctx.size || '24';
  export let role: string = ctx.role || 'img';
  export let color: string = ctx.color || 'currentColor';
  export let withEvents = ctx.withEvents || false;
  export let ariaLabel: string = 'themeco brand';
  export let title: TitleType = {};
  export let desc: DescType = {};

  let ariaDescribedby = `${title.id || ''} ${desc.id || ''}`;
  let hasDescription = false;

  $: if (title.id || desc.id) {
    hasDescription = true;
  } else {
    hasDescription = false;
  }
</script>

{#if withEvents}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...$$restProps}
    {role}
    width={size}
    height={size}
    fill={color}
    class={className}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 448 512"
    on:click
    on:keydown
    on:keyup
    on:focus
    on:blur
    on:mouseenter
    on:mouseleave
    on:mouseover
    on:mouseout
  >
    {#if title.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <path
      d="M202.9 8.43c9.9-5.73 26-5.82 35.95-.21L430 115.85c10 5.6 18 19.44 18 30.86V364c0 11.44-8.06 25.29-18 31L238.81 503.74c-9.93 5.66-26 5.57-35.85-.21L17.86 395.12C8 389.34 0 375.38 0 364V146.71c0-11.44 8-25.36 17.91-31.08zm-77.4 199.83c-15.94 0-31.89.14-47.83.14v101.45H96.8V280h28.7c49.71 0 49.56-71.74 0-71.74zm140.14 100.29l-30.73-34.64c37-7.51 34.8-65.23-10.87-65.51-16.09 0-32.17-.14-48.26-.14v101.59h19.13v-33.91h18.41l29.56 33.91h22.76zm-41.59-82.32c23.34 0 23.26 32.46 0 32.46h-29.13v-32.46zm-95.56-1.6c21.18 0 21.11 38.85 0 38.85H96.18v-38.84zm192.65-18.25c-68.46 0-71 105.8 0 105.8 69.48-.01 69.41-105.8 0-105.8zm0 17.39c44.12 0 44.8 70.86 0 70.86s-44.43-70.86 0-70.86z"
    />
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...$$restProps}
    {role}
    width={size}
    height={size}
    fill={color}
    class={className}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 448 512"
  >
    {#if title.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <path
      d="M202.9 8.43c9.9-5.73 26-5.82 35.95-.21L430 115.85c10 5.6 18 19.44 18 30.86V364c0 11.44-8.06 25.29-18 31L238.81 503.74c-9.93 5.66-26 5.57-35.85-.21L17.86 395.12C8 389.34 0 375.38 0 364V146.71c0-11.44 8-25.36 17.91-31.08zm-77.4 199.83c-15.94 0-31.89.14-47.83.14v101.45H96.8V280h28.7c49.71 0 49.56-71.74 0-71.74zm140.14 100.29l-30.73-34.64c37-7.51 34.8-65.23-10.87-65.51-16.09 0-32.17-.14-48.26-.14v101.59h19.13v-33.91h18.41l29.56 33.91h22.76zm-41.59-82.32c23.34 0 23.26 32.46 0 32.46h-29.13v-32.46zm-95.56-1.6c21.18 0 21.11 38.85 0 38.85H96.18v-38.84zm192.65-18.25c-68.46 0-71 105.8 0 105.8 69.48-.01 69.41-105.8 0-105.8zm0 17.39c44.12 0 44.8 70.86 0 70.86s-44.43-70.86 0-70.86z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-awesome-icons.codewithshin.com)
## Props
@prop export let size: string = ctx.size || '24';
@prop export let role: string = ctx.role || 'img';
@prop export let color: string = ctx.color || 'currentColor';
@prop export let withEvents = ctx.withEvents || false;
@prop export let ariaLabel: string = 'themeco brand';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
