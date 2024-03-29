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
  export let ariaLabel: string = 'hryvnia sign solid';
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
      d="M121.9 116.2C138.3 103.1 158.7 96 179.6 96H223c27.1 0 49 21.9 49 49c0 11.5-4 22.4-11.1 31H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H155.5l-50.6 28.9c-1.7 1-3.4 2-5.1 3.1H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H52.3c-2.8 9.9-4.3 20.4-4.3 31c0 62.4 50.6 113 113 113h43.4c35.5 0 70-12.1 97.7-34.3L308 441c13.8-11 16-31.2 5-45s-31.2-16-45-5l-5.9 4.7c-16.4 13.1-36.7 20.2-57.7 20.2H161c-27.1 0-49-21.9-49-49c0-11.5 4-22.4 11.1-31H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H228.5l50.6-28.9c1.7-1 3.4-2 5.1-3.1H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H331.7c2.8-10 4.3-20.4 4.3-31c0-62.4-50.6-113-113-113H179.6c-35.5 0-70 12.1-97.7 34.3L76 71c-13.8 11-16 31.2-5 45s31.2 16 45 5l5.9-4.7z"
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
      d="M121.9 116.2C138.3 103.1 158.7 96 179.6 96H223c27.1 0 49 21.9 49 49c0 11.5-4 22.4-11.1 31H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H155.5l-50.6 28.9c-1.7 1-3.4 2-5.1 3.1H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H52.3c-2.8 9.9-4.3 20.4-4.3 31c0 62.4 50.6 113 113 113h43.4c35.5 0 70-12.1 97.7-34.3L308 441c13.8-11 16-31.2 5-45s-31.2-16-45-5l-5.9 4.7c-16.4 13.1-36.7 20.2-57.7 20.2H161c-27.1 0-49-21.9-49-49c0-11.5 4-22.4 11.1-31H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H228.5l50.6-28.9c1.7-1 3.4-2 5.1-3.1H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H331.7c2.8-10 4.3-20.4 4.3-31c0-62.4-50.6-113-113-113H179.6c-35.5 0-70 12.1-97.7 34.3L76 71c-13.8 11-16 31.2-5 45s31.2 16 45 5l5.9-4.7z"
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
@prop export let ariaLabel: string = 'hryvnia sign solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
