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
  export let ariaLabel: string = 'vial virus solid';
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
      d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96V384c0 53 43 96 96 96c28.6 0 54.2-12.5 71.8-32.3c.1-14.2 5.6-28.3 16.4-39.1c.2-.2 .1-.6-.2-.6c-30.9 0-56-25.1-56-56s25.1-56 56-56c.3 0 .4-.4 .2-.6c-21.9-21.9-21.9-57.3 0-79.2c2.4-2.4 5-4.6 7.8-6.5V96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160 96 32zM96 192V96h64v96H96zM216 376c28.8 0 43.2 34.8 22.9 55.2c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0c20.4-20.4 55.2-5.9 55.2 22.9c0 13.3 10.7 24 24 24s24-10.7 24-24c0-28.8 34.8-43.2 55.2-22.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9C444.8 410.8 459.2 376 488 376c13.3 0 24-10.7 24-24s-10.7-24-24-24c-28.8 0-43.2-34.8-22.9-55.2c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0C410.8 259.2 376 244.8 376 216c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 28.8-34.8 43.2-55.2 22.9c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9c20.4 20.4 5.9 55.2-22.9 55.2c-13.3 0-24 10.7-24 24s10.7 24 24 24zm104-88a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm40 96a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
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
      d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96V384c0 53 43 96 96 96c28.6 0 54.2-12.5 71.8-32.3c.1-14.2 5.6-28.3 16.4-39.1c.2-.2 .1-.6-.2-.6c-30.9 0-56-25.1-56-56s25.1-56 56-56c.3 0 .4-.4 .2-.6c-21.9-21.9-21.9-57.3 0-79.2c2.4-2.4 5-4.6 7.8-6.5V96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160 96 32zM96 192V96h64v96H96zM216 376c28.8 0 43.2 34.8 22.9 55.2c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0c20.4-20.4 55.2-5.9 55.2 22.9c0 13.3 10.7 24 24 24s24-10.7 24-24c0-28.8 34.8-43.2 55.2-22.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9C444.8 410.8 459.2 376 488 376c13.3 0 24-10.7 24-24s-10.7-24-24-24c-28.8 0-43.2-34.8-22.9-55.2c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0C410.8 259.2 376 244.8 376 216c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 28.8-34.8 43.2-55.2 22.9c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9c20.4 20.4 5.9 55.2-22.9 55.2c-13.3 0-24 10.7-24 24s10.7 24 24 24zm104-88a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm40 96a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
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
@prop export let ariaLabel: string = 'vial virus solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
