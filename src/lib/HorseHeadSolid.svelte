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
  export let ariaLabel: string = 'horse head solid';
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
    viewBox="0 0 640 512"
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
      d="M64 464V316.9c0-108.4 68.3-205.1 170.5-241.3L404.2 15.5C425.6 7.9 448 23.8 448 46.4c0 11-5.5 21.2-14.6 27.3L400 96c48.1 0 91.2 29.8 108.1 74.9l48.6 129.5c11.8 31.4 4.1 66.8-19.6 90.5c-16 16-37.8 25.1-60.5 25.1h-3.4c-26.1 0-50.9-11.6-67.6-31.7l-32.3-38.7c-11.7 4.1-24.2 6.4-37.3 6.4l-.1 0 0 0c-6.3 0-12.5-.5-18.6-1.5c-3.6-.6-7.2-1.4-10.7-2.3l0 0c-28.9-7.8-53.1-26.8-67.8-52.2c-4.4-7.6-14.2-10.3-21.9-5.8s-10.3 14.2-5.8 21.9c24 41.5 68.3 70 119.3 71.9l47.2 70.8c4 6.1 6.2 13.2 6.2 20.4c0 20.3-16.5 36.8-36.8 36.8H112c-26.5 0-48-21.5-48-48zM392 224a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
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
    viewBox="0 0 640 512"
  >
    {#if title.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <path
      d="M64 464V316.9c0-108.4 68.3-205.1 170.5-241.3L404.2 15.5C425.6 7.9 448 23.8 448 46.4c0 11-5.5 21.2-14.6 27.3L400 96c48.1 0 91.2 29.8 108.1 74.9l48.6 129.5c11.8 31.4 4.1 66.8-19.6 90.5c-16 16-37.8 25.1-60.5 25.1h-3.4c-26.1 0-50.9-11.6-67.6-31.7l-32.3-38.7c-11.7 4.1-24.2 6.4-37.3 6.4l-.1 0 0 0c-6.3 0-12.5-.5-18.6-1.5c-3.6-.6-7.2-1.4-10.7-2.3l0 0c-28.9-7.8-53.1-26.8-67.8-52.2c-4.4-7.6-14.2-10.3-21.9-5.8s-10.3 14.2-5.8 21.9c24 41.5 68.3 70 119.3 71.9l47.2 70.8c4 6.1 6.2 13.2 6.2 20.4c0 20.3-16.5 36.8-36.8 36.8H112c-26.5 0-48-21.5-48-48zM392 224a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
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
@prop export let ariaLabel: string = 'horse head solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
