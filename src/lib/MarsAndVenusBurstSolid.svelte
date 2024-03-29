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
  export let ariaLabel: string = 'mars and venus burst solid';
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
      d="M504 0c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l39 39-22.2 22.2C475.9 78.4 439.6 64 400 64c-88.4 0-160 71.6-160 160c0 80.2 59 146.6 136 158.2V408H352c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v32c0 13.3 10.7 24 24 24s24-10.7 24-24V456h24c13.3 0 24-10.7 24-24s-10.7-24-24-24H424V382.2c77-11.6 136-78 136-158.2c0-31.4-9-60.7-24.7-85.4L560 113.9l39 39c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V24c0-13.3-10.7-24-24-24H504zM400 128a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM190.9 18.1C188.4 12 182.6 8 176 8s-12.4 4-14.9 10.1l-29.4 74L55.6 68.9c-6.3-1.9-13.1 .2-17.2 5.3s-4.6 12.2-1.4 17.9l39.5 69.1L10.9 206.4c-5.4 3.7-8 10.3-6.5 16.7s6.7 11.2 13.1 12.2l78.7 12.2L90.6 327c-.5 6.5 3.1 12.7 9 15.5s12.9 1.8 17.8-2.6L176 286.1l58.6 53.9c4.1 3.8 9.9 5.1 15.2 3.6C223.6 310.8 208 269.2 208 224c0-60.8 28.3-115 72.4-150.2L220.3 92.1l-29.4-74z"
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
      d="M504 0c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l39 39-22.2 22.2C475.9 78.4 439.6 64 400 64c-88.4 0-160 71.6-160 160c0 80.2 59 146.6 136 158.2V408H352c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v32c0 13.3 10.7 24 24 24s24-10.7 24-24V456h24c13.3 0 24-10.7 24-24s-10.7-24-24-24H424V382.2c77-11.6 136-78 136-158.2c0-31.4-9-60.7-24.7-85.4L560 113.9l39 39c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V24c0-13.3-10.7-24-24-24H504zM400 128a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM190.9 18.1C188.4 12 182.6 8 176 8s-12.4 4-14.9 10.1l-29.4 74L55.6 68.9c-6.3-1.9-13.1 .2-17.2 5.3s-4.6 12.2-1.4 17.9l39.5 69.1L10.9 206.4c-5.4 3.7-8 10.3-6.5 16.7s6.7 11.2 13.1 12.2l78.7 12.2L90.6 327c-.5 6.5 3.1 12.7 9 15.5s12.9 1.8 17.8-2.6L176 286.1l58.6 53.9c4.1 3.8 9.9 5.1 15.2 3.6C223.6 310.8 208 269.2 208 224c0-60.8 28.3-115 72.4-150.2L220.3 92.1l-29.4-74z"
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
@prop export let ariaLabel: string = 'mars and venus burst solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
