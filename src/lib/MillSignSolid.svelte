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
  export let ariaLabel: string = 'mill sign solid';
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
      d="M302.1 42.8c5.9-16.6-2.7-35-19.4-40.9s-35 2.7-40.9 19.4L208 116.1c-5.7 4-11.1 8.5-16 13.5C171.7 108.9 143.3 96 112 96c-19.5 0-37.8 5-53.7 13.7C52.5 101.4 42.9 96 32 96C14.3 96 0 110.3 0 128v80V416c0 17.7 14.3 32 32 32s32-14.3 32-32V208c0-26.5 21.5-48 48-48s48 21.5 48 48v42.5L81.9 469.2c-5.9 16.6 2.7 35 19.4 40.9s35-2.7 40.9-19.4l21.4-60C168.9 441 179.6 448 192 448c17.7 0 32-14.3 32-32V261.5l35.7-100c3.9-1 8.1-1.6 12.3-1.6c26.5 0 48 21.5 48 48V416c0 17.7 14.3 32 32 32s32-14.3 32-32V208c0-58.2-44.3-106-101.1-111.5l19.2-53.8z"
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
      d="M302.1 42.8c5.9-16.6-2.7-35-19.4-40.9s-35 2.7-40.9 19.4L208 116.1c-5.7 4-11.1 8.5-16 13.5C171.7 108.9 143.3 96 112 96c-19.5 0-37.8 5-53.7 13.7C52.5 101.4 42.9 96 32 96C14.3 96 0 110.3 0 128v80V416c0 17.7 14.3 32 32 32s32-14.3 32-32V208c0-26.5 21.5-48 48-48s48 21.5 48 48v42.5L81.9 469.2c-5.9 16.6 2.7 35 19.4 40.9s35-2.7 40.9-19.4l21.4-60C168.9 441 179.6 448 192 448c17.7 0 32-14.3 32-32V261.5l35.7-100c3.9-1 8.1-1.6 12.3-1.6c26.5 0 48 21.5 48 48V416c0 17.7 14.3 32 32 32s32-14.3 32-32V208c0-58.2-44.3-106-101.1-111.5l19.2-53.8z"
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
@prop export let ariaLabel: string = 'mill sign solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
