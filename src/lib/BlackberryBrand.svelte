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
  export let ariaLabel: string = 'blackberry brand';
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
      d="M166 116.9c0 23.4-16.4 49.1-72.5 49.1H23.4l21-88.8h67.8c42.1 0 53.8 23.3 53.8 39.7zm126.2-39.7h-67.8L205.7 166h70.1c53.8 0 70.1-25.7 70.1-49.1.1-16.4-11.6-39.7-53.7-39.7zM88.8 208.1H21L0 296.9h70.1c56.1 0 72.5-23.4 72.5-49.1 0-16.3-11.7-39.7-53.8-39.7zm180.1 0h-67.8l-18.7 88.8h70.1c53.8 0 70.1-23.4 70.1-49.1 0-16.3-11.7-39.7-53.7-39.7zm189.3-53.8h-67.8l-18.7 88.8h70.1c53.8 0 70.1-23.4 70.1-49.1.1-16.3-11.6-39.7-53.7-39.7zm-28 137.9h-67.8L343.7 381h70.1c56.1 0 70.1-23.4 70.1-49.1 0-16.3-11.6-39.7-53.7-39.7zM240.8 346H173l-18.7 88.8h70.1c56.1 0 70.1-25.7 70.1-49.1.1-16.3-11.6-39.7-53.7-39.7z"
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
      d="M166 116.9c0 23.4-16.4 49.1-72.5 49.1H23.4l21-88.8h67.8c42.1 0 53.8 23.3 53.8 39.7zm126.2-39.7h-67.8L205.7 166h70.1c53.8 0 70.1-25.7 70.1-49.1.1-16.4-11.6-39.7-53.7-39.7zM88.8 208.1H21L0 296.9h70.1c56.1 0 72.5-23.4 72.5-49.1 0-16.3-11.7-39.7-53.8-39.7zm180.1 0h-67.8l-18.7 88.8h70.1c53.8 0 70.1-23.4 70.1-49.1 0-16.3-11.7-39.7-53.7-39.7zm189.3-53.8h-67.8l-18.7 88.8h70.1c53.8 0 70.1-23.4 70.1-49.1.1-16.3-11.6-39.7-53.7-39.7zm-28 137.9h-67.8L343.7 381h70.1c56.1 0 70.1-23.4 70.1-49.1 0-16.3-11.6-39.7-53.7-39.7zM240.8 346H173l-18.7 88.8h70.1c56.1 0 70.1-25.7 70.1-49.1.1-16.3-11.6-39.7-53.7-39.7z"
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
@prop export let ariaLabel: string = 'blackberry brand';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
