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
  export let ariaLabel: string = 'kiwi bird solid';
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
      d="M291.2 388.4c31.2-18.8 64.7-36.4 101.1-36.4H448c4.6 0 9.1-.2 13.6-.7l85.3 121.9c4 5.7 11.3 8.2 17.9 6.1s11.2-8.3 11.2-15.3V224c0-70.7-57.3-128-128-128H392.3c-36.4 0-69.9-17.6-101.1-36.4C262.3 42.1 228.3 32 192 32C86 32 0 118 0 224c0 71.1 38.6 133.1 96 166.3V456c0 13.3 10.7 24 24 24s24-10.7 24-24V410c15.3 3.9 31.4 6 48 6c5.4 0 10.7-.2 16-.7V456c0 13.3 10.7 24 24 24s24-10.7 24-24V405.1c12.4-4.4 24.2-10 35.2-16.7zM448 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
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
      d="M291.2 388.4c31.2-18.8 64.7-36.4 101.1-36.4H448c4.6 0 9.1-.2 13.6-.7l85.3 121.9c4 5.7 11.3 8.2 17.9 6.1s11.2-8.3 11.2-15.3V224c0-70.7-57.3-128-128-128H392.3c-36.4 0-69.9-17.6-101.1-36.4C262.3 42.1 228.3 32 192 32C86 32 0 118 0 224c0 71.1 38.6 133.1 96 166.3V456c0 13.3 10.7 24 24 24s24-10.7 24-24V410c15.3 3.9 31.4 6 48 6c5.4 0 10.7-.2 16-.7V456c0 13.3 10.7 24 24 24s24-10.7 24-24V405.1c12.4-4.4 24.2-10 35.2-16.7zM448 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
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
@prop export let ariaLabel: string = 'kiwi bird solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
