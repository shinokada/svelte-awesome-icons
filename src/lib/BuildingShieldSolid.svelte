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
  export let ariaLabel: string = 'building shield solid';
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
    viewBox="0 0 576 512"
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
      d="M0 48C0 21.5 21.5 0 48 0H336c26.5 0 48 21.5 48 48V207l-42.4 17H304 272c-8.8 0-16 7.2-16 16v32 24.2V304c0 .9 .1 1.7 .2 2.6c2.3 58.1 24.1 144.8 98.7 201.5c-5.8 2.5-12.2 3.9-18.9 3.9H240V432c0-26.5-21.5-48-48-48s-48 21.5-48 48v80H48c-26.5 0-48-21.5-48-48V48zM80 224c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H80zm80 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zM64 112v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zM176 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H176zm80 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H272c-8.8 0-16 7.2-16 16zM423.1 225.7c5.7-2.3 12.1-2.3 17.8 0l120 48C570 277.4 576 286.2 576 296c0 63.3-25.9 168.8-134.8 214.2c-5.9 2.5-12.6 2.5-18.5 0C313.9 464.8 288 359.3 288 296c0-9.8 6-18.6 15.1-22.3l120-48zM527.4 312L432 273.8V461.7c68.2-33 91.5-99 95.4-149.7z"
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
    viewBox="0 0 576 512"
  >
    {#if title.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <path
      d="M0 48C0 21.5 21.5 0 48 0H336c26.5 0 48 21.5 48 48V207l-42.4 17H304 272c-8.8 0-16 7.2-16 16v32 24.2V304c0 .9 .1 1.7 .2 2.6c2.3 58.1 24.1 144.8 98.7 201.5c-5.8 2.5-12.2 3.9-18.9 3.9H240V432c0-26.5-21.5-48-48-48s-48 21.5-48 48v80H48c-26.5 0-48-21.5-48-48V48zM80 224c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H80zm80 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zM64 112v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zM176 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H176zm80 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H272c-8.8 0-16 7.2-16 16zM423.1 225.7c5.7-2.3 12.1-2.3 17.8 0l120 48C570 277.4 576 286.2 576 296c0 63.3-25.9 168.8-134.8 214.2c-5.9 2.5-12.6 2.5-18.5 0C313.9 464.8 288 359.3 288 296c0-9.8 6-18.6 15.1-22.3l120-48zM527.4 312L432 273.8V461.7c68.2-33 91.5-99 95.4-149.7z"
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
@prop export let ariaLabel: string = 'building shield solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
