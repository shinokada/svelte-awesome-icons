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
  export let ariaLabel: string = 'brazilian real sign solid';
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
      d="M400 0c17.7 0 32 14.3 32 32V50.2c12.5 2.3 24.7 6.4 36.2 12.1l10.1 5.1c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-10.2-5.1c-9.9-5-20.9-7.5-32-7.5h-1.7c-29.8 0-53.9 24.1-53.9 53.9c0 22 13.4 41.8 33.9 50l52 20.8c44.7 17.9 74.1 61.2 74.1 109.4v3.4c0 51.2-33.6 94.6-80 109.2V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V460.6c-15-3.5-29.4-9.7-42.3-18.3l-23.4-15.6c-14.7-9.8-18.7-29.7-8.9-44.4s29.7-18.7 44.4-8.9L361.2 389c10.8 7.2 23.4 11 36.3 11c27.9 0 50.5-22.6 50.5-50.5v-3.4c0-22-13.4-41.8-33.9-50l-52-20.8C317.3 257.4 288 214.1 288 165.9C288 114 321.5 70 368 54.2V32c0-17.7 14.3-32 32-32zM0 64C0 46.3 14.3 32 32 32h80c79.5 0 144 64.5 144 144c0 58.8-35.2 109.3-85.7 131.7l51.4 128.4c6.6 16.4-1.4 35-17.8 41.6s-35-1.4-41.6-17.8L106.3 320H64V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V288 64zM64 256h48c44.2 0 80-35.8 80-80s-35.8-80-80-80H64V256z"
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
      d="M400 0c17.7 0 32 14.3 32 32V50.2c12.5 2.3 24.7 6.4 36.2 12.1l10.1 5.1c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-10.2-5.1c-9.9-5-20.9-7.5-32-7.5h-1.7c-29.8 0-53.9 24.1-53.9 53.9c0 22 13.4 41.8 33.9 50l52 20.8c44.7 17.9 74.1 61.2 74.1 109.4v3.4c0 51.2-33.6 94.6-80 109.2V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V460.6c-15-3.5-29.4-9.7-42.3-18.3l-23.4-15.6c-14.7-9.8-18.7-29.7-8.9-44.4s29.7-18.7 44.4-8.9L361.2 389c10.8 7.2 23.4 11 36.3 11c27.9 0 50.5-22.6 50.5-50.5v-3.4c0-22-13.4-41.8-33.9-50l-52-20.8C317.3 257.4 288 214.1 288 165.9C288 114 321.5 70 368 54.2V32c0-17.7 14.3-32 32-32zM0 64C0 46.3 14.3 32 32 32h80c79.5 0 144 64.5 144 144c0 58.8-35.2 109.3-85.7 131.7l51.4 128.4c6.6 16.4-1.4 35-17.8 41.6s-35-1.4-41.6-17.8L106.3 320H64V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V288 64zM64 256h48c44.2 0 80-35.8 80-80s-35.8-80-80-80H64V256z"
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
@prop export let ariaLabel: string = 'brazilian real sign solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
