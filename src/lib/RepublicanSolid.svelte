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
  export let ariaLabel: string = 'republican solid';
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
      d="M0 192C0 103.6 71.6 32 160 32H384c88.4 0 160 71.6 160 160v64H0V192zm415.9-64c-2.4 0-4.7 1.3-5.7 3.4l-12.6 24.6-28.2 4c-2.4 .3-4.4 2-5.2 4.2s-.1 4.7 1.6 6.3l20.4 19.2-4.8 27.1c-.4 2.3 .6 4.7 2.5 6s4.6 1.6 6.7 .5l25.2-12.8 25.2 12.8c2.2 1.1 4.8 .9 6.7-.5s3-3.7 2.5-6l-4.8-27.1L466 170.5c1.7-1.6 2.4-4.1 1.6-6.3s-2.8-3.9-5.2-4.2l-28.2-4-12.6-24.6c-1.1-2.1-3.3-3.4-5.7-3.4zm-138.3 3.4c-1.1-2.1-3.3-3.4-5.7-3.4s-4.7 1.3-5.7 3.4l-12.6 24.6-28.2 4c-2.4 .3-4.4 2-5.2 4.2s-.1 4.7 1.6 6.3l20.4 19.2-4.8 27.1c-.4 2.3 .6 4.7 2.5 6s4.6 1.6 6.7 .5l25.2-12.8 25.2 12.8c2.2 1.1 4.8 .9 6.7-.5s3-3.7 2.5-6l-4.8-27.1L322 170.5c1.7-1.6 2.4-4.1 1.6-6.3s-2.8-3.9-5.2-4.2l-28.2-4-12.6-24.6zM127.9 128c-2.4 0-4.7 1.3-5.7 3.4l-12.6 24.6-28.2 4c-2.4 .3-4.4 2-5.2 4.2s-.1 4.7 1.6 6.3l20.4 19.2-4.8 27.1c-.4 2.3 .6 4.7 2.5 6s4.6 1.6 6.7 .5l25.2-12.8 25.2 12.8c2.2 1.1 4.8 .9 6.7-.5s3-3.7 2.5-6l-4.8-27.1L178 170.5c1.7-1.6 2.4-4.1 1.6-6.3s-2.8-3.9-5.2-4.2l-28.2-4-12.6-24.6c-1.1-2.1-3.3-3.4-5.7-3.4zm.1 160H320h96 32 64 32v32 80c0 8.8 7.2 16 16 16s16-7.2 16-16V352c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 44.2-35.8 80-80 80s-80-35.8-80-80V352H448v32 64c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V384H128v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V384 288H128z"
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
      d="M0 192C0 103.6 71.6 32 160 32H384c88.4 0 160 71.6 160 160v64H0V192zm415.9-64c-2.4 0-4.7 1.3-5.7 3.4l-12.6 24.6-28.2 4c-2.4 .3-4.4 2-5.2 4.2s-.1 4.7 1.6 6.3l20.4 19.2-4.8 27.1c-.4 2.3 .6 4.7 2.5 6s4.6 1.6 6.7 .5l25.2-12.8 25.2 12.8c2.2 1.1 4.8 .9 6.7-.5s3-3.7 2.5-6l-4.8-27.1L466 170.5c1.7-1.6 2.4-4.1 1.6-6.3s-2.8-3.9-5.2-4.2l-28.2-4-12.6-24.6c-1.1-2.1-3.3-3.4-5.7-3.4zm-138.3 3.4c-1.1-2.1-3.3-3.4-5.7-3.4s-4.7 1.3-5.7 3.4l-12.6 24.6-28.2 4c-2.4 .3-4.4 2-5.2 4.2s-.1 4.7 1.6 6.3l20.4 19.2-4.8 27.1c-.4 2.3 .6 4.7 2.5 6s4.6 1.6 6.7 .5l25.2-12.8 25.2 12.8c2.2 1.1 4.8 .9 6.7-.5s3-3.7 2.5-6l-4.8-27.1L322 170.5c1.7-1.6 2.4-4.1 1.6-6.3s-2.8-3.9-5.2-4.2l-28.2-4-12.6-24.6zM127.9 128c-2.4 0-4.7 1.3-5.7 3.4l-12.6 24.6-28.2 4c-2.4 .3-4.4 2-5.2 4.2s-.1 4.7 1.6 6.3l20.4 19.2-4.8 27.1c-.4 2.3 .6 4.7 2.5 6s4.6 1.6 6.7 .5l25.2-12.8 25.2 12.8c2.2 1.1 4.8 .9 6.7-.5s3-3.7 2.5-6l-4.8-27.1L178 170.5c1.7-1.6 2.4-4.1 1.6-6.3s-2.8-3.9-5.2-4.2l-28.2-4-12.6-24.6c-1.1-2.1-3.3-3.4-5.7-3.4zm.1 160H320h96 32 64 32v32 80c0 8.8 7.2 16 16 16s16-7.2 16-16V352c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 44.2-35.8 80-80 80s-80-35.8-80-80V352H448v32 64c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V384H128v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V384 288H128z"
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
@prop export let ariaLabel: string = 'republican solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
