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
  export let ariaLabel: string = 'syringe solid';
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
      d="M441 7l32 32 32 32c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15L417.9 128l55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-72-72L295 73c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l55 55L422.1 56 407 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zM210.3 155.7l61.1-61.1c.3 .3 .6 .7 1 1l16 16 56 56 56 56 16 16c.3 .3 .6 .6 1 1l-191 191c-10.5 10.5-24.7 16.4-39.6 16.4H97.9L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l57-57V325.3c0-14.9 5.9-29.1 16.4-39.6l43.3-43.3 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57 41.4-41.4 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57z"
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
      d="M441 7l32 32 32 32c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15L417.9 128l55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-72-72L295 73c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l55 55L422.1 56 407 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zM210.3 155.7l61.1-61.1c.3 .3 .6 .7 1 1l16 16 56 56 56 56 16 16c.3 .3 .6 .6 1 1l-191 191c-10.5 10.5-24.7 16.4-39.6 16.4H97.9L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l57-57V325.3c0-14.9 5.9-29.1 16.4-39.6l43.3-43.3 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57 41.4-41.4 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57z"
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
@prop export let ariaLabel: string = 'syringe solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
