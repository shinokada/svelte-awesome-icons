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
  export let ariaLabel: string = 'hands bound solid';
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
      d="M96 32C96 14.3 81.7 0 64 0S32 14.3 32 32V96v59.1 .7V192v21.9c0 14.2 5.1 27.9 14.3 38.7L131.6 352H128c-13.3 0-24 10.7-24 24s10.7 24 24 24h32H288h64H480h32c13.3 0 24-10.7 24-24s-10.7-24-24-24h-3.6l85.3-99.5c9.2-10.8 14.3-24.5 14.3-38.7V192 155.8v-.7V96 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V96v48.8l-69.3 92.4c-5.7 7.6-16.1 9.6-24.2 4.8c-9.7-5.7-12.1-18.7-5.1-27.5L473 180c10.8-13.5 8.9-33.3-4.4-44.5s-33-9.8-44.5 3.2l-46.7 52.5C361 209.7 352 233.4 352 258.1V320v32H288V320 258.1c0-24.6-9-48.4-25.4-66.8l-46.7-52.5c-11.5-13-31.3-14.4-44.5-3.2s-15.2 30.9-4.4 44.5l27.6 34.5c7 8.8 4.7 21.8-5.1 27.5c-8.1 4.8-18.6 2.7-24.2-4.8L96 144.8V96 32zm64 448v32H288V480h64v32H480V480h32c13.3 0 24-10.7 24-24s-10.7-24-24-24H480 352 288 160 128c-13.3 0-24 10.7-24 24s10.7 24 24 24h32z"
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
      d="M96 32C96 14.3 81.7 0 64 0S32 14.3 32 32V96v59.1 .7V192v21.9c0 14.2 5.1 27.9 14.3 38.7L131.6 352H128c-13.3 0-24 10.7-24 24s10.7 24 24 24h32H288h64H480h32c13.3 0 24-10.7 24-24s-10.7-24-24-24h-3.6l85.3-99.5c9.2-10.8 14.3-24.5 14.3-38.7V192 155.8v-.7V96 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V96v48.8l-69.3 92.4c-5.7 7.6-16.1 9.6-24.2 4.8c-9.7-5.7-12.1-18.7-5.1-27.5L473 180c10.8-13.5 8.9-33.3-4.4-44.5s-33-9.8-44.5 3.2l-46.7 52.5C361 209.7 352 233.4 352 258.1V320v32H288V320 258.1c0-24.6-9-48.4-25.4-66.8l-46.7-52.5c-11.5-13-31.3-14.4-44.5-3.2s-15.2 30.9-4.4 44.5l27.6 34.5c7 8.8 4.7 21.8-5.1 27.5c-8.1 4.8-18.6 2.7-24.2-4.8L96 144.8V96 32zm64 448v32H288V480h64v32H480V480h32c13.3 0 24-10.7 24-24s-10.7-24-24-24H480 352 288 160 128c-13.3 0-24 10.7-24 24s10.7 24 24 24h32z"
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
@prop export let ariaLabel: string = 'hands bound solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
