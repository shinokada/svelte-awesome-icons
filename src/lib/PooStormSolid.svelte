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
  export let ariaLabel: string = 'poo storm solid';
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
      d="M236.9 .2c-5.5-.7-11 1.4-14.5 5.7s-4.6 10.1-2.8 15.3c2.8 8.2 4.3 16.9 4.3 26.1c0 21.7-8.5 37.2-21.9 47.6c-13.8 10.8-34 17-57.8 17H128c-35.3 0-64 28.7-64 64c0 12.2 3.4 23.5 9.3 33.2C31.7 216.2 0 252.4 0 296c0 40.9 28 75.4 65.8 85.2c-5.3-18.5 1-38.5 16.2-50.7l160-128c17.6-14.1 42.6-14 60.2 .2s22.8 38.6 12.8 58.8L285.7 320H304c20.4 0 38.5 12.9 45.3 32.1c3.7 10.6 3.5 21.8 0 31.9H360c48.6 0 88-39.4 88-88c0-43.6-31.7-79.8-73.3-86.8c5.9-9.7 9.3-21.1 9.3-33.2c0-35.3-28.7-64-64-64h-1.4c.9-5.4 1.4-10.9 1.4-16.6c0-48.7-36.1-88.9-83.1-95.2zm45.1 227.4c-5.8-4.7-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 11.4-5.1 17.8s8.3 10.7 15.1 10.7h70.1L129.7 488.8c-3.4 6.7-1.6 14.9 4.3 19.6s14.2 4.7 20.1 .1l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7H233.9l52.4-104.8c3.4-6.7 1.6-14.9-4.3-19.6z"
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
      d="M236.9 .2c-5.5-.7-11 1.4-14.5 5.7s-4.6 10.1-2.8 15.3c2.8 8.2 4.3 16.9 4.3 26.1c0 21.7-8.5 37.2-21.9 47.6c-13.8 10.8-34 17-57.8 17H128c-35.3 0-64 28.7-64 64c0 12.2 3.4 23.5 9.3 33.2C31.7 216.2 0 252.4 0 296c0 40.9 28 75.4 65.8 85.2c-5.3-18.5 1-38.5 16.2-50.7l160-128c17.6-14.1 42.6-14 60.2 .2s22.8 38.6 12.8 58.8L285.7 320H304c20.4 0 38.5 12.9 45.3 32.1c3.7 10.6 3.5 21.8 0 31.9H360c48.6 0 88-39.4 88-88c0-43.6-31.7-79.8-73.3-86.8c5.9-9.7 9.3-21.1 9.3-33.2c0-35.3-28.7-64-64-64h-1.4c.9-5.4 1.4-10.9 1.4-16.6c0-48.7-36.1-88.9-83.1-95.2zm45.1 227.4c-5.8-4.7-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 11.4-5.1 17.8s8.3 10.7 15.1 10.7h70.1L129.7 488.8c-3.4 6.7-1.6 14.9 4.3 19.6s14.2 4.7 20.1 .1l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7H233.9l52.4-104.8c3.4-6.7 1.6-14.9-4.3-19.6z"
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
@prop export let ariaLabel: string = 'poo storm solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
