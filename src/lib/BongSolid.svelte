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
  export let ariaLabel: string = 'bong solid';
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
      d="M160 208.5c0 29.1-15.6 53.9-37.2 67.8c-17.2 11.1-31.5 26.1-41.7 43.7H302.9c-10.2-17.6-24.5-32.6-41.7-43.7c-21.6-13.9-37.2-38.7-37.2-67.8V64H160V208.5zM288 64V208.5c0 5.7 3.1 10.9 7.9 14c11.2 7.2 21.5 15.5 30.9 24.8L366.1 208l-7-7c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l24 24 24 24c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-7-7-43.3 43.3C374 314.1 384 347.9 384 384c0 39.4-11.9 76.1-32.2 106.5c-9.6 14.4-26.5 21.5-43.8 21.5H76.1c-17.3 0-34.2-7.1-43.8-21.5C11.9 460.1 0 423.4 0 384c0-67.8 35.1-127.3 88.1-161.5c4.8-3.1 7.9-8.3 7.9-14V64C78.3 64 64 49.7 64 32S78.3 0 96 0h16H272h16c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
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
      d="M160 208.5c0 29.1-15.6 53.9-37.2 67.8c-17.2 11.1-31.5 26.1-41.7 43.7H302.9c-10.2-17.6-24.5-32.6-41.7-43.7c-21.6-13.9-37.2-38.7-37.2-67.8V64H160V208.5zM288 64V208.5c0 5.7 3.1 10.9 7.9 14c11.2 7.2 21.5 15.5 30.9 24.8L366.1 208l-7-7c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l24 24 24 24c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-7-7-43.3 43.3C374 314.1 384 347.9 384 384c0 39.4-11.9 76.1-32.2 106.5c-9.6 14.4-26.5 21.5-43.8 21.5H76.1c-17.3 0-34.2-7.1-43.8-21.5C11.9 460.1 0 423.4 0 384c0-67.8 35.1-127.3 88.1-161.5c4.8-3.1 7.9-8.3 7.9-14V64C78.3 64 64 49.7 64 32S78.3 0 96 0h16H272h16c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
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
@prop export let ariaLabel: string = 'bong solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
