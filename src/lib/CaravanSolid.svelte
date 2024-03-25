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
  export let ariaLabel: string = 'caravan solid';
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
      d="M0 112C0 67.8 35.8 32 80 32H416c88.4 0 160 71.6 160 160V352h32c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0H288c0 53-43 96-96 96s-96-43-96-96H80c-44.2 0-80-35.8-80-80V112zM320 352H448V256H416c-8.8 0-16-7.2-16-16s7.2-16 16-16h32V160c0-17.7-14.3-32-32-32H352c-17.7 0-32 14.3-32 32V352zM96 128c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H224c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H96zm96 336a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
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
      d="M0 112C0 67.8 35.8 32 80 32H416c88.4 0 160 71.6 160 160V352h32c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0H288c0 53-43 96-96 96s-96-43-96-96H80c-44.2 0-80-35.8-80-80V112zM320 352H448V256H416c-8.8 0-16-7.2-16-16s7.2-16 16-16h32V160c0-17.7-14.3-32-32-32H352c-17.7 0-32 14.3-32 32V352zM96 128c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H224c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H96zm96 336a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
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
@prop export let ariaLabel: string = 'caravan solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
