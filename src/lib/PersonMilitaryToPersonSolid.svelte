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
  export let ariaLabel: string = 'person military to person solid';
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
      d="M71 12.5c-8.6 1-15 8.2-15 16.8c0 9.3 7.5 16.8 16.7 16.9H184.1c8.8-.1 15.9-7.2 15.9-16V16c0-9.5-8.3-17-17.8-15.9L71 12.5zM189.5 78.1H66.5C64.9 83.8 64 89.8 64 96c0 35.3 28.7 64 64 64s64-28.7 64-64c0-6.2-.9-12.2-2.5-17.9zM32 256v32c0 17.7 14.3 32 32 32H192c1.8 0 3.5-.1 5.2-.4L53 208.6C40.1 220.3 32 237.2 32 256zm190.2 42.5c1.1-3.3 1.8-6.8 1.8-10.5V256c0-35.3-28.7-64-64-64H96c-3.7 0-7.4 .3-10.9 .9L222.2 298.5zM384 160a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H352zM215.8 450.1c5.2-4.6 8.2-11.1 8.2-18.1s-3-13.5-8.2-18.1l-64-56c-7.1-6.2-17.1-7.7-25.7-3.8S112 366.6 112 376v32l-88 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l88 0v32c0 9.4 5.5 18 14.1 21.9s18.6 2.4 25.7-3.8l64-56zM288 431.9c0 6.9 2.9 13.5 8.1 18.1l64 56.4c7.1 6.2 17.1 7.8 25.7 3.9s14.1-12.4 14.1-21.9l0-32.4 88 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-88 0 0-32c0-9.4-5.5-18-14.1-21.9s-18.6-2.4-25.7 3.8l-64 56c-5.2 4.5-8.2 11.1-8.2 18z"
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
      d="M71 12.5c-8.6 1-15 8.2-15 16.8c0 9.3 7.5 16.8 16.7 16.9H184.1c8.8-.1 15.9-7.2 15.9-16V16c0-9.5-8.3-17-17.8-15.9L71 12.5zM189.5 78.1H66.5C64.9 83.8 64 89.8 64 96c0 35.3 28.7 64 64 64s64-28.7 64-64c0-6.2-.9-12.2-2.5-17.9zM32 256v32c0 17.7 14.3 32 32 32H192c1.8 0 3.5-.1 5.2-.4L53 208.6C40.1 220.3 32 237.2 32 256zm190.2 42.5c1.1-3.3 1.8-6.8 1.8-10.5V256c0-35.3-28.7-64-64-64H96c-3.7 0-7.4 .3-10.9 .9L222.2 298.5zM384 160a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H352zM215.8 450.1c5.2-4.6 8.2-11.1 8.2-18.1s-3-13.5-8.2-18.1l-64-56c-7.1-6.2-17.1-7.7-25.7-3.8S112 366.6 112 376v32l-88 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l88 0v32c0 9.4 5.5 18 14.1 21.9s18.6 2.4 25.7-3.8l64-56zM288 431.9c0 6.9 2.9 13.5 8.1 18.1l64 56.4c7.1 6.2 17.1 7.8 25.7 3.9s14.1-12.4 14.1-21.9l0-32.4 88 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-88 0 0-32c0-9.4-5.5-18-14.1-21.9s-18.6-2.4-25.7 3.8l-64 56c-5.2 4.5-8.2 11.1-8.2 18z"
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
@prop export let ariaLabel: string = 'person military to person solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
