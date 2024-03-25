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
  export let ariaLabel: string = 'helmet un solid';
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
    viewBox="0 0 512 512"
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
      d="M479.5 224C471.2 98.9 367.2 0 240 0C107.5 0 0 107.5 0 240v56.3C0 344.8 39.2 384 87.7 384H200h14.9L343.5 505.4c4.5 4.2 10.4 6.6 16.5 6.6h96c13.3 0 24-10.7 24-24s-10.7-24-24-24H369.5l-1.5-1.5V288h80 32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-.5zM320 417.2l-78-73.7L274.4 288H320V417.2zM285.3 103.1l34.7 52V112c0-8.8 7.2-16 16-16s16 7.2 16 16v96c0 7.1-4.6 13.3-11.4 15.3s-14-.6-17.9-6.4l-34.7-52V208c0 8.8-7.2 16-16 16s-16-7.2-16-16V112c0-7.1 4.6-13.3 11.4-15.3s14 .6 17.9 6.4zM160 112v64c0 8.8 7.2 16 16 16s16-7.2 16-16V112c0-8.8 7.2-16 16-16s16 7.2 16 16v64c0 26.5-21.5 48-48 48s-48-21.5-48-48V112c0-8.8 7.2-16 16-16s16 7.2 16 16z"
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
    viewBox="0 0 512 512"
  >
    {#if title.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <path
      d="M479.5 224C471.2 98.9 367.2 0 240 0C107.5 0 0 107.5 0 240v56.3C0 344.8 39.2 384 87.7 384H200h14.9L343.5 505.4c4.5 4.2 10.4 6.6 16.5 6.6h96c13.3 0 24-10.7 24-24s-10.7-24-24-24H369.5l-1.5-1.5V288h80 32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-.5zM320 417.2l-78-73.7L274.4 288H320V417.2zM285.3 103.1l34.7 52V112c0-8.8 7.2-16 16-16s16 7.2 16 16v96c0 7.1-4.6 13.3-11.4 15.3s-14-.6-17.9-6.4l-34.7-52V208c0 8.8-7.2 16-16 16s-16-7.2-16-16V112c0-7.1 4.6-13.3 11.4-15.3s14 .6 17.9 6.4zM160 112v64c0 8.8 7.2 16 16 16s16-7.2 16-16V112c0-8.8 7.2-16 16-16s16 7.2 16 16v64c0 26.5-21.5 48-48 48s-48-21.5-48-48V112c0-8.8 7.2-16 16-16s16 7.2 16 16z"
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
@prop export let ariaLabel: string = 'helmet un solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
