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
  export let ariaLabel: string = 'cart flatbed suitcase solid';
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
      d="M0 32C0 14.3 14.3 0 32 0H48c44.2 0 80 35.8 80 80V368c0 8.8 7.2 16 16 16H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H541.3c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16H253.3c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16H144c-44.2 0-80-35.8-80-80V80c0-8.8-7.2-16-16-16H32C14.3 64 0 49.7 0 32zM432 96V56c0-4.4-3.6-8-8-8H344c-4.4 0-8 3.6-8 8V96h96zM288 96V56c0-30.9 25.1-56 56-56h80c30.9 0 56 25.1 56 56V96 320H288V96zM512 320V96h16c26.5 0 48 21.5 48 48V272c0 26.5-21.5 48-48 48H512zM240 96h16V320H240c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"
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
      d="M0 32C0 14.3 14.3 0 32 0H48c44.2 0 80 35.8 80 80V368c0 8.8 7.2 16 16 16H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H541.3c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16H253.3c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16H144c-44.2 0-80-35.8-80-80V80c0-8.8-7.2-16-16-16H32C14.3 64 0 49.7 0 32zM432 96V56c0-4.4-3.6-8-8-8H344c-4.4 0-8 3.6-8 8V96h96zM288 96V56c0-30.9 25.1-56 56-56h80c30.9 0 56 25.1 56 56V96 320H288V96zM512 320V96h16c26.5 0 48 21.5 48 48V272c0 26.5-21.5 48-48 48H512zM240 96h16V320H240c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"
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
@prop export let ariaLabel: string = 'cart flatbed suitcase solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
