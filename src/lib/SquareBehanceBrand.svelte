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
  export let ariaLabel: string = 'square behance brand';
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
      d="M155.3 318.4c17.2 0 31.2-6.1 31.2-25.4c0-19.7-11.7-27.4-30.3-27.5h-46v52.9h45.1zm-5.4-129.6H110.3v44.8H153c15.1 0 25.8-6.6 25.8-22.9c0-17.7-13.7-21.9-28.9-21.9zm129.5 74.8h62.2c-1.7-18.5-11.3-29.7-30.5-29.7c-18.3 0-30.5 11.4-31.7 29.7zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zM349.5 185H271.7V166.1h77.8V185zM193.7 243.7c23.6 6.7 35 27.5 35 51.6c0 39-32.7 55.7-67.6 55.9H68v-192h90.5c32.9 0 61.4 9.3 61.4 47.5c0 19.3-9 28.8-26.2 37zm118.7-38.6c43.5 0 67.6 34.3 67.6 75.4c0 1.6-.1 3.3-.2 5c0 .8-.1 1.5-.1 2.2H279.5c0 22.2 11.7 35.3 34.1 35.3c11.6 0 26.5-6.2 30.2-18.1h33.7c-10.4 31.9-31.9 46.8-65.1 46.8c-43.8 0-71.1-29.7-71.1-73c0-41.8 28.7-73.6 71.1-73.6z"
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
      d="M155.3 318.4c17.2 0 31.2-6.1 31.2-25.4c0-19.7-11.7-27.4-30.3-27.5h-46v52.9h45.1zm-5.4-129.6H110.3v44.8H153c15.1 0 25.8-6.6 25.8-22.9c0-17.7-13.7-21.9-28.9-21.9zm129.5 74.8h62.2c-1.7-18.5-11.3-29.7-30.5-29.7c-18.3 0-30.5 11.4-31.7 29.7zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zM349.5 185H271.7V166.1h77.8V185zM193.7 243.7c23.6 6.7 35 27.5 35 51.6c0 39-32.7 55.7-67.6 55.9H68v-192h90.5c32.9 0 61.4 9.3 61.4 47.5c0 19.3-9 28.8-26.2 37zm118.7-38.6c43.5 0 67.6 34.3 67.6 75.4c0 1.6-.1 3.3-.2 5c0 .8-.1 1.5-.1 2.2H279.5c0 22.2 11.7 35.3 34.1 35.3c11.6 0 26.5-6.2 30.2-18.1h33.7c-10.4 31.9-31.9 46.8-65.1 46.8c-43.8 0-71.1-29.7-71.1-73c0-41.8 28.7-73.6 71.1-73.6z"
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
@prop export let ariaLabel: string = 'square behance brand';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
