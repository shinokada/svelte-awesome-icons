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
  export let ariaLabel: string = 'lari sign solid';
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
      d="M144 32c17.7 0 32 14.3 32 32V96.7c5.3-.4 10.6-.7 16-.7s10.7 .2 16 .7V64c0-17.7 14.3-32 32-32s32 14.3 32 32v49.4c54.9 25.2 95.8 75.5 108.2 136.2c3.5 17.3-7.7 34.2-25 37.7s-34.2-7.7-37.7-25c-6.1-29.9-22.5-55.9-45.4-74.3V256c0 17.7-14.3 32-32 32s-32-14.3-32-32V161c-5.2-.7-10.6-1-16-1s-10.8 .3-16 1v95c0 17.7-14.3 32-32 32s-32-14.3-32-32V188.1C82.7 211.5 64 247.6 64 288c0 70.7 57.3 128 128 128H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H192 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48.9C18.5 382 0 337.2 0 288c0-77.5 45.9-144.3 112-174.6V64c0-17.7 14.3-32 32-32z"
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
      d="M144 32c17.7 0 32 14.3 32 32V96.7c5.3-.4 10.6-.7 16-.7s10.7 .2 16 .7V64c0-17.7 14.3-32 32-32s32 14.3 32 32v49.4c54.9 25.2 95.8 75.5 108.2 136.2c3.5 17.3-7.7 34.2-25 37.7s-34.2-7.7-37.7-25c-6.1-29.9-22.5-55.9-45.4-74.3V256c0 17.7-14.3 32-32 32s-32-14.3-32-32V161c-5.2-.7-10.6-1-16-1s-10.8 .3-16 1v95c0 17.7-14.3 32-32 32s-32-14.3-32-32V188.1C82.7 211.5 64 247.6 64 288c0 70.7 57.3 128 128 128H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H192 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48.9C18.5 382 0 337.2 0 288c0-77.5 45.9-144.3 112-174.6V64c0-17.7 14.3-32 32-32z"
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
@prop export let ariaLabel: string = 'lari sign solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
