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
  export let ariaLabel: string = 'hat cowboy side solid';
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
      d="M152.7 135.9l-10.4 57.2c6.8-.7 13.6-1.1 20.5-1.1h10.7c39.4 0 77.8 12.1 110.1 34.7L562.4 421.8l35.1 24.6c24.4-6 42.5-28.1 42.5-54.4c0-75.8-94.7-126.6-134.6-144.7L474 83.9C468.2 53.8 441.8 32 411.1 32h-2.7c-5.6 0-11.1 .7-16.5 2.2L199.2 85.5c-23.9 6.4-42 26-46.5 50.4zM0 384c0 35.3 28.7 64 64 64H544L265.3 252.9c-26.9-18.8-58.9-28.9-91.8-28.9H162.9c-60.6 0-116 34.2-143.1 88.4L13.5 325C4.6 342.7 0 362.3 0 382.2V384z"
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
      d="M152.7 135.9l-10.4 57.2c6.8-.7 13.6-1.1 20.5-1.1h10.7c39.4 0 77.8 12.1 110.1 34.7L562.4 421.8l35.1 24.6c24.4-6 42.5-28.1 42.5-54.4c0-75.8-94.7-126.6-134.6-144.7L474 83.9C468.2 53.8 441.8 32 411.1 32h-2.7c-5.6 0-11.1 .7-16.5 2.2L199.2 85.5c-23.9 6.4-42 26-46.5 50.4zM0 384c0 35.3 28.7 64 64 64H544L265.3 252.9c-26.9-18.8-58.9-28.9-91.8-28.9H162.9c-60.6 0-116 34.2-143.1 88.4L13.5 325C4.6 342.7 0 362.3 0 382.2V384z"
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
@prop export let ariaLabel: string = 'hat cowboy side solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
