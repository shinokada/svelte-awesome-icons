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
  export let ariaLabel: string = 'edge legacy brand';
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
      d="M25.71,228.16l.35-.48c0,.16,0,.32-.07.48Zm460.58,15.51c0-44-7.76-84.46-28.81-122.4C416.5,47.88,343.91,8,258.89,8,119,7.72,40.62,113.21,26.06,227.68c42.42-61.31,117.07-121.38,220.37-125,0,0,109.67,0,99.42,105H170c6.37-37.39,18.55-59,34.34-78.93-75.05,34.9-121.85,96.1-120.75,188.32.83,71.45,50.13,144.84,120.75,172,83.35,31.84,192.77,7.2,240.13-21.33V363.31C363.6,419.8,173.6,424.23,172.21,295.74H486.29V243.67Z"
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
      d="M25.71,228.16l.35-.48c0,.16,0,.32-.07.48Zm460.58,15.51c0-44-7.76-84.46-28.81-122.4C416.5,47.88,343.91,8,258.89,8,119,7.72,40.62,113.21,26.06,227.68c42.42-61.31,117.07-121.38,220.37-125,0,0,109.67,0,99.42,105H170c6.37-37.39,18.55-59,34.34-78.93-75.05,34.9-121.85,96.1-120.75,188.32.83,71.45,50.13,144.84,120.75,172,83.35,31.84,192.77,7.2,240.13-21.33V363.31C363.6,419.8,173.6,424.23,172.21,295.74H486.29V243.67Z"
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
@prop export let ariaLabel: string = 'edge legacy brand';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
