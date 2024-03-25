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
  export let ariaLabel: string = 'guarani sign solid';
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
    viewBox="0 0 384 512"
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
      d="M192 0c-17.7 0-32 14.3-32 32V66.7C69.2 81.9 0 160.9 0 256s69.2 174.1 160 189.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V445.3c90.8-15.2 160-94.2 160-189.3c0-17.7-14.3-32-32-32H224V132c22.1 5.7 41.8 17.1 57.6 32.6c12.6 12.4 32.9 12.2 45.3-.4s12.2-32.9-.5-45.3C299 92 263.5 73.3 224 66.7V32c0-17.7-14.3-32-32-32zM160 132V380c-55.2-14.2-96-64.3-96-124s40.8-109.8 96-124zM224 380V288h92c-11.6 45-47 80.4-92 92z"
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
    viewBox="0 0 384 512"
  >
    {#if title.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <path
      d="M192 0c-17.7 0-32 14.3-32 32V66.7C69.2 81.9 0 160.9 0 256s69.2 174.1 160 189.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V445.3c90.8-15.2 160-94.2 160-189.3c0-17.7-14.3-32-32-32H224V132c22.1 5.7 41.8 17.1 57.6 32.6c12.6 12.4 32.9 12.2 45.3-.4s12.2-32.9-.5-45.3C299 92 263.5 73.3 224 66.7V32c0-17.7-14.3-32-32-32zM160 132V380c-55.2-14.2-96-64.3-96-124s40.8-109.8 96-124zM224 380V288h92c-11.6 45-47 80.4-92 92z"
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
@prop export let ariaLabel: string = 'guarani sign solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
