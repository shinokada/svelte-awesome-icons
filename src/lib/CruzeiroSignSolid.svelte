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
  export let ariaLabel: string = 'cruzeiro sign solid';
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
      d="M96 256c0-88.4 71.6-160 160-160c41 0 78.3 15.4 106.7 40.7c13.2 11.8 33.4 10.7 45.2-2.5s10.7-33.4-2.5-45.2c-39.6-35.5-92-57-149.3-57C132.3 32 32 132.3 32 256s100.3 224 224 224c57.4 0 109.7-21.6 149.3-57c13.2-11.8 14.3-32 2.5-45.2s-32-14.3-45.2-2.5C334.3 400.6 297 416 256 416V320v-8.7c0-12.8 10.4-23.3 23.3-23.3c4.6 0 9.1 1.4 12.9 3.9l10.1 6.7c14.7 9.8 34.6 5.8 44.4-8.9s5.8-34.6-8.9-44.4l-10.1-6.7c-14.3-9.6-31.2-14.7-48.4-14.7c-12.4 0-24.2 2.6-34.9 7.3c-5.5-4.5-12.6-7.3-20.3-7.3c-17.7 0-32 14.3-32 32v55.3V320v82.7C135.5 378 96 321.6 96 256z"
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
      d="M96 256c0-88.4 71.6-160 160-160c41 0 78.3 15.4 106.7 40.7c13.2 11.8 33.4 10.7 45.2-2.5s10.7-33.4-2.5-45.2c-39.6-35.5-92-57-149.3-57C132.3 32 32 132.3 32 256s100.3 224 224 224c57.4 0 109.7-21.6 149.3-57c13.2-11.8 14.3-32 2.5-45.2s-32-14.3-45.2-2.5C334.3 400.6 297 416 256 416V320v-8.7c0-12.8 10.4-23.3 23.3-23.3c4.6 0 9.1 1.4 12.9 3.9l10.1 6.7c14.7 9.8 34.6 5.8 44.4-8.9s5.8-34.6-8.9-44.4l-10.1-6.7c-14.3-9.6-31.2-14.7-48.4-14.7c-12.4 0-24.2 2.6-34.9 7.3c-5.5-4.5-12.6-7.3-20.3-7.3c-17.7 0-32 14.3-32 32v55.3V320v82.7C135.5 378 96 321.6 96 256z"
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
@prop export let ariaLabel: string = 'cruzeiro sign solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
