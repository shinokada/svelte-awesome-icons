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
  export let ariaLabel: string = 'mountain city solid';
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
      d="M336 0c-26.5 0-48 21.5-48 48v92.1l71.4 118.4c2.5-1.6 5.4-2.5 8.6-2.5h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-3.5l73.8 122.4c12.4 20.6 12.9 46.3 1.2 67.3c-.4 .8-.9 1.6-1.4 2.3H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H568V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H480V48c0-26.5-21.5-48-48-48H336zm32 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16zM352 176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176zm160 96c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zM224 188.9L283.8 288H223l-48 64-24.6-41.2L224 188.9zm29.4-44.2C247.1 134.3 236 128 224 128s-23.1 6.3-29.4 16.7L5.1 458.9c-6.5 10.8-6.7 24.3-.7 35.3S22 512 34.5 512H413.5c12.5 0 24-6.8 30.1-17.8s5.8-24.5-.7-35.3L253.4 144.7z"
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
      d="M336 0c-26.5 0-48 21.5-48 48v92.1l71.4 118.4c2.5-1.6 5.4-2.5 8.6-2.5h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-3.5l73.8 122.4c12.4 20.6 12.9 46.3 1.2 67.3c-.4 .8-.9 1.6-1.4 2.3H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H568V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H480V48c0-26.5-21.5-48-48-48H336zm32 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16zM352 176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176zm160 96c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zM224 188.9L283.8 288H223l-48 64-24.6-41.2L224 188.9zm29.4-44.2C247.1 134.3 236 128 224 128s-23.1 6.3-29.4 16.7L5.1 458.9c-6.5 10.8-6.7 24.3-.7 35.3S22 512 34.5 512H413.5c12.5 0 24-6.8 30.1-17.8s5.8-24.5-.7-35.3L253.4 144.7z"
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
@prop export let ariaLabel: string = 'mountain city solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
