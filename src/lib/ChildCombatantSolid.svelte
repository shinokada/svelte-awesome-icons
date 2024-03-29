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
  export let ariaLabel: string = 'child combatant solid';
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
    viewBox="0 0 576 512"
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
      d="M176 128A64 64 0 1 0 176 0a64 64 0 1 0 0 128zm-8 352V352h16V480c0 17.7 14.3 32 32 32s32-14.3 32-32V300.5L260.9 321c9.4 15 29.2 19.4 44.1 10s19.4-29.2 10-44.1l-51.7-82.1c-17.6-27.9-48.3-44.9-81.2-44.9H169.8c-33 0-63.7 16.9-81.2 44.9L36.9 287c-9.4 15-4.9 34.7 10 44.1s34.7 4.9 44.1-10L104 300.5V480c0 17.7 14.3 32 32 32s32-14.3 32-32zM448 0H432 416c-8.8 0-16 7.2-16 16s7.2 16 16 16V132.3c-9.6 5.5-16 15.9-16 27.7v32c-17.7 0-32 14.3-32 32V368c0 17.7 14.3 32 32 32h16v96c0 8.8 7.2 16 16 16h59.5c10.4 0 18-9.8 15.5-19.9L484 400h44c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H480V325.3l53.1-17.7c6.5-2.2 10.9-8.3 10.9-15.2V208c0-8.8-7.2-16-16-16H512c-8.8 0-16 7.2-16 16v56l-16 5.3V160c0-11.8-6.4-22.2-16-27.7V16c0-8.8-7.2-16-16-16z"
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
    viewBox="0 0 576 512"
  >
    {#if title.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <path
      d="M176 128A64 64 0 1 0 176 0a64 64 0 1 0 0 128zm-8 352V352h16V480c0 17.7 14.3 32 32 32s32-14.3 32-32V300.5L260.9 321c9.4 15 29.2 19.4 44.1 10s19.4-29.2 10-44.1l-51.7-82.1c-17.6-27.9-48.3-44.9-81.2-44.9H169.8c-33 0-63.7 16.9-81.2 44.9L36.9 287c-9.4 15-4.9 34.7 10 44.1s34.7 4.9 44.1-10L104 300.5V480c0 17.7 14.3 32 32 32s32-14.3 32-32zM448 0H432 416c-8.8 0-16 7.2-16 16s7.2 16 16 16V132.3c-9.6 5.5-16 15.9-16 27.7v32c-17.7 0-32 14.3-32 32V368c0 17.7 14.3 32 32 32h16v96c0 8.8 7.2 16 16 16h59.5c10.4 0 18-9.8 15.5-19.9L484 400h44c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H480V325.3l53.1-17.7c6.5-2.2 10.9-8.3 10.9-15.2V208c0-8.8-7.2-16-16-16H512c-8.8 0-16 7.2-16 16v56l-16 5.3V160c0-11.8-6.4-22.2-16-27.7V16c0-8.8-7.2-16-16-16z"
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
@prop export let ariaLabel: string = 'child combatant solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
