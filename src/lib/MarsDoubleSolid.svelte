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
  export let ariaLabel: string = 'mars double solid';
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
      d="M312 32c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l33.4 33.4L275.8 159c-28.4-19.5-62.7-31-99.8-31C78.8 128 0 206.8 0 304s78.8 176 176 176s176-78.8 176-176c0-37-11.4-71.4-31-99.8l52.6-52.6L407 185c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V56c0-13.3-10.7-24-24-24H312zm88 48h0v0l0 0zM64 304a112 112 0 1 1 224 0A112 112 0 1 1 64 304zM368 480c97.2 0 176-78.8 176-176c0-37-11.4-71.4-31-99.8l52.6-52.6L599 185c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V56c0-13.3-10.7-24-24-24H504c-9.7 0-18.5 5.8-22.2 14.8c-1.2 2.9-1.8 6-1.8 9l0 .2v.2c0 6.2 2.5 12.2 7 16.8l33.4 33.4L480 146.7V168c0 22.6-13.6 43.1-34.6 51.7c-.8 .3-1.7 .7-2.5 1C465.7 241.2 480 270.9 480 304c0 61.9-50.1 112-112 112c-5.4 0-10.8-.4-16-1.1c-12.9 20.4-29.1 38.3-48.1 53.1c19.8 7.8 41.4 12 64 12z"
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
      d="M312 32c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l33.4 33.4L275.8 159c-28.4-19.5-62.7-31-99.8-31C78.8 128 0 206.8 0 304s78.8 176 176 176s176-78.8 176-176c0-37-11.4-71.4-31-99.8l52.6-52.6L407 185c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V56c0-13.3-10.7-24-24-24H312zm88 48h0v0l0 0zM64 304a112 112 0 1 1 224 0A112 112 0 1 1 64 304zM368 480c97.2 0 176-78.8 176-176c0-37-11.4-71.4-31-99.8l52.6-52.6L599 185c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V56c0-13.3-10.7-24-24-24H504c-9.7 0-18.5 5.8-22.2 14.8c-1.2 2.9-1.8 6-1.8 9l0 .2v.2c0 6.2 2.5 12.2 7 16.8l33.4 33.4L480 146.7V168c0 22.6-13.6 43.1-34.6 51.7c-.8 .3-1.7 .7-2.5 1C465.7 241.2 480 270.9 480 304c0 61.9-50.1 112-112 112c-5.4 0-10.8-.4-16-1.1c-12.9 20.4-29.1 38.3-48.1 53.1c19.8 7.8 41.4 12 64 12z"
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
@prop export let ariaLabel: string = 'mars double solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
