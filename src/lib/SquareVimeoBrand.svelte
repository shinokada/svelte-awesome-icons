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
  export let ariaLabel: string = 'square vimeo brand';
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
      d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM318.5 309.5C275 366 238.2 394.3 208.1 394.3c-18.7 0-34.4-17.2-47.3-51.6c-3.8-13.9-7.3-26.9-10.5-39c-18.2-68.3-28.6-107.4-46.2-107.4c-2.4 0-10.8 5-25.1 15.1L64 192c7-6.1 13.9-12.4 20.6-18.5c29.1-26.3 55.6-50.3 73.5-51.9c24.9-2.4 40.2 14.6 46 51.1c20.5 129.6 29.6 149.2 66.8 90.5c13.4-21.2 20.6-37.2 21.5-48.3c3.4-32.8-25.6-30.6-45.2-22.2c15.7-51.5 45.8-76.5 90.1-75.1c32.9 1 48.4 22.4 46.5 64c-1.4 31.1-23.2 73.8-65.3 127.9z"
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
      d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM318.5 309.5C275 366 238.2 394.3 208.1 394.3c-18.7 0-34.4-17.2-47.3-51.6c-3.8-13.9-7.3-26.9-10.5-39c-18.2-68.3-28.6-107.4-46.2-107.4c-2.4 0-10.8 5-25.1 15.1L64 192c7-6.1 13.9-12.4 20.6-18.5c29.1-26.3 55.6-50.3 73.5-51.9c24.9-2.4 40.2 14.6 46 51.1c20.5 129.6 29.6 149.2 66.8 90.5c13.4-21.2 20.6-37.2 21.5-48.3c3.4-32.8-25.6-30.6-45.2-22.2c15.7-51.5 45.8-76.5 90.1-75.1c32.9 1 48.4 22.4 46.5 64c-1.4 31.1-23.2 73.8-65.3 127.9z"
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
@prop export let ariaLabel: string = 'square vimeo brand';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
