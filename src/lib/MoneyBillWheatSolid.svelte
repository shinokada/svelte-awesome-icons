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
  export let ariaLabel: string = 'money bill wheat solid';
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
      d="M176 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80c0-8.8 7.2-16 16-16zM56 16h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H56C42.7 64 32 53.3 32 40s10.7-24 24-24zM24 88H136c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24S10.7 88 24 88zm8 96c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24zM272 16c0-8.8 7.2-16 16-16c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80zM400 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80c0-8.8 7.2-16 16-16zm80 144c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16zM352 128c8.8 0 16 7.2 16 16c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-96 16c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16zM0 304c0-26.5 21.5-48 48-48H464c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V304zM48 416v48H96c0-26.5-21.5-48-48-48zM96 304H48v48c26.5 0 48-21.5 48-48zM464 416c-26.5 0-48 21.5-48 48h48V416zM416 304c0 26.5 21.5 48 48 48V304H416zm-96 80a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"
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
      d="M176 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80c0-8.8 7.2-16 16-16zM56 16h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H56C42.7 64 32 53.3 32 40s10.7-24 24-24zM24 88H136c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24S10.7 88 24 88zm8 96c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24zM272 16c0-8.8 7.2-16 16-16c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80zM400 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80c0-8.8 7.2-16 16-16zm80 144c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16zM352 128c8.8 0 16 7.2 16 16c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-96 16c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16zM0 304c0-26.5 21.5-48 48-48H464c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V304zM48 416v48H96c0-26.5-21.5-48-48-48zM96 304H48v48c26.5 0 48-21.5 48-48zM464 416c-26.5 0-48 21.5-48 48h48V416zM416 304c0 26.5 21.5 48 48 48V304H416zm-96 80a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"
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
@prop export let ariaLabel: string = 'money bill wheat solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
